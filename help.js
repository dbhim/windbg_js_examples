/// <reference path="JSProvider.d.ts" />


"use strict";


let dlog = host.diagnostics.debugLog;
let scriptName = 'help';


function MyLog (str) {
    
    dlog (`[${scriptName}] ${str}`);
    //dlog (`${str}`);
}


function MyLogn (str) {
    
    MyLog (`${str}\n`);
}


function initializeScript () {
    
    MyLog ("initializeScript\n");
}


function invokeScript () {

    MyLog ("invokeScript\n");
    
}


function uninitializeScript () {
    
	MyLog ("uninitializeScript\n");
}


function OutList (prefix, lists) {
    
    for (let line of lists) {
       MyLogn (`${prefix}${line}`);
       }
}


function ShowHelp () {

    OutList ("host.", Object.keys (host));
    OutList ("host.memory.", Object.keys (host.memory));
    OutList ("host.namespace.", Object.keys (host.namespace));
    OutList ("host.namespace.Debugger.", Object.keys (host.namespace.Debugger));
    OutList ("host.namespace.Debugger.Utility.", Object.keys (host.namespace.Debugger.Utility));
    OutList ("host.namespace.Debugger.Utility.Control.", Object.keys (host.namespace.Debugger.Utility.Control));

    OutList ("host.Int64.", Object.keys (host.Int64));
    {
    let a = host.Int64(1);
    let props = [];
    
    for (const prop in a) {
        props.push (prop);
        }
    OutList ("host.Int64(1).", props);
    }
    
    {
    let a = host.getModuleSymbol("ntdll.dll", "NtCreateFile", "void*");
    MyLogn (`${a}`);
    OutList ("getModuleSymbol().", Object.keys (a));
    }
	
}
