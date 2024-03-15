/// <reference path="JSProvider.d.ts" />


"use strict";

let dlog = host.diagnostics.debugLog;


function MyLog (str) {
    
    dlog (`${str}`);
}


function MyLogn (str) {
    
    dlog (`[km_hello] ${str}\n`);
}


function initializeScript () {
    
    MyLogn ("initializeScript");
    
    return [
        new host.apiVersionSupport(1, 1),
        new host.functionAlias(
            TestCommand,
            'Hello3TestCommand'),
        ]
}


function GetObjectAddress (objectName) {
    
    let output = host.namespace.Debugger.Utility.Control.ExecuteCommand (`!object ${objectName}`);
    
    for (let line of output) {
        // MyLogn (` ${line}`);
        let match = line.match (/Object:\s*([0-9a-fA-F]+)/);
        if (match) {
            // MyLogn ("Match: " + match[1]);
            return host.parseInt64 (`0x${match[1]}`);
            }
       }
}


// Работает только для полей, не являющихся указателями
function GetObjectFieldOffset (typedVar, fieldName) {
    
    let field = typedVar[fieldName];
    MyLogn (`${typedVar.address} ${field.address}`);
    
    return field.address.subtract (typedVar.address);
}


function DecodedTypeName (typeName) {
    
    let match = typeName.match (/^([_a-zA-Z]+)/);
    if (match) {
        return match[1];
        }

}


function GetTypeFieldOffset (typeName, fieldName) {
    
    let decodeTypeName = DecodedTypeName (typeName);
    
    let output = host.namespace.Debugger.Utility.Control.ExecuteCommand (`dt ${decodeTypeName} ${fieldName}`);
    
    const re = new RegExp ("\\+0x([0-9a-fA-F]+)\\s*" + fieldName);
    
    for (let line of output) {
        // MyLogn (` ${line}`);
        let match = line.match (re);
        if (match) {
            // MyLogn ("Match: " + match[1]);
            return parseInt (match[1], 16);
            }
       }
    
    return undefined;
}


function ReadUnicodeString (addr, count) {
    
    let ret = "";
    
    let buf = host.memory.readMemoryValues (addr, 2 * count);

    for (let i = 0; i < count; ++i) {
        ret += String.fromCharCode ((buf[2*i+1] << 8) + buf[2*i]);
        }
    
    return ret;
}


function ReadUnicodeStringObject (usObject) {
    
    return ReadUnicodeString (usObject.Buffer.address, usObject.Length / 2);
}


function invokeScript () {
    
    MyLogn ("invokeScript");

    
    MyLogn ("NtCreateFile: " + host.getModuleSymbolAddress ("nt", "NtCreateFile").toString(16));
    
    let psActiveProcessHeadAddr = host.getModuleSymbolAddress ("nt", "PsActiveProcessHead");
    
    //let psActiveProcessHead = host.getModuleSymbol ("nt", "PsActiveProcessHead", "_LIST_ENTRY");
    // let psActiveProcessHead = host.createTypedObject (psActiveProcessHeadAddr, "nt", "_LIST_ENTRY");
    let psActiveProcessHead = host.createPointerObject (psActiveProcessHeadAddr, "nt", "_LIST_ENTRY*");
        
    let flink = psActiveProcessHead.Flink;
    // MyLogn (`${psActiveProcessHead.targetLocation} ${Object.keys(psActiveProcessHead)}`);
    // MyLogn (`${Object.keys(psActiveProcessHead.Flink)}`);
    // MyLogn (`Flink: ${psActiveProcessHead.Flink} ${psActiveProcessHead.Flink.getObjectValue(0)} Blink: ${psActiveProcessHead.Blink.getNativeValue(0)}`);
    
    MyLogn (`psActiveProcessHead.address: ${psActiveProcessHead.address}`);
    MyLogn (`psActiveProcessHead.targetLocation: ${psActiveProcessHead.targetLocation}`);
    MyLogn (`Flink: ${psActiveProcessHead.Flink.address} Blink: ${psActiveProcessHead.Blink.address}`);

    
    // let tcpDeviceObjectAddr = GetObjectAddress ("\\Device\\Tcp");
    let tcpDeviceObjectAddr = host.parseInt64 ("0xffffbb0555be3dc0");
    let tcpDeviceObject = host.createTypedObject (tcpDeviceObjectAddr, "nt", "_DEVICE_OBJECT");
    
    MyLogn (`tcpDeviceObject: ${tcpDeviceObject.address}`);
    // MyLogn (`${Object.keys(tcpDeviceObject)}`);
    
    let tcpDriverObject = tcpDeviceObject.DriverObject;
    MyLogn (`tcpDriverObject: ${tcpDriverObject.targetLocation}`);
    
    // Завершающего нуля может не быть, поэтому стандартная функция может работать не правильно.
    // let tcpDriverName = host.memory.readWideString (tcpDriverObject.DriverName.Buffer.address);
    let tcpDriverName = ReadUnicodeStringObject (tcpDriverObject.DriverName);
    MyLogn (`tcpDriverObject.DriverName ${tcpDriverObject.DriverName.Buffer.address}: ${tcpDriverName}`);
    
    MyLogn (`DriverName offset = ${GetObjectFieldOffset (tcpDriverObject, "DriverName").toString(16)}`);
    
    MyLogn (`tcpDriverObject.targetType ${DecodedTypeName(tcpDriverObject.targetType.toString())}`);
    MyLogn (`tcpDriverObject.targetType ${tcpDriverObject.targetType}`);

    // 
    for (let fieldName of Object.getOwnPropertyNames(tcpDriverObject)) {

        let offset = GetTypeFieldOffset (tcpDriverObject.targetType.toString(), fieldName);
        if (typeof offset !== 'undefined') {
            MyLogn (`${fieldName} offset = ${offset.toString(16)}`);
            }
        
        }


}


function uninitializeScript () {
    
    MyLogn ("uninitializeScript");
}


function TestCommand (param) {
    
    MyLogn (`TestCommand with param = ${(param+1).toString(16)}`);
}
