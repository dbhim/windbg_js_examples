/// <reference path="JSProvider.d.ts" />


"use strict";

let dlog = host.diagnostics.debugLog;


function MyLog (str) {
    
    dlog (`${str}`);
}


function MyLogn (str) {
    
    dlog (`[bp] ${str}\n`);
}


function initializeScript () {
    
    MyLogn ("initializeScript");
    
}


function ShowBreakpointsList () {

    for (let bp of host.currentProcess.Debug.Breakpoints) {
        try {
            MyLogn (`UniqueID:${bp.UniqueID}  Id:${bp.Id}  IsEnabled:${bp.IsEnabled}  IsDeferred:${bp.IsDeferred}    Address:${bp.Address}  Type:${bp.Type}  OffsetExpression:${bp.OffsetExpression}  Command:${bp.Command}  Size:${bp.Size}  PassCount:${bp.PassCount}  CurrentPassCount:${bp.CurrentPassCount}  Location:${bp.Location}  Condition:${bp.Condition}`);
            MyLogn (`${bp}  ${Object.keys(bp)}`);
            }
        catch (e) {
            MyLogn (`Error ${e.Message}`);
            }
        }
}


function IsBreakpointExist (bpAddr) {
    
    return host.currentProcess.Debug.Breakpoints.Any(
        c => c.Address == bpAddr
		);
}


function IsBreakpointExistByName (moduleName, symbolName) {
    
    return host.currentProcess.Debug.Breakpoints.Any(
        c => c.OffsetExpression  == `${moduleName}!${symbolName}+0x0`
		);
}


function BpRtlAllocateHeapHandler () {
    
    let regs = host.currentThread.Registers.User;
    let args = [regs.rcx, regs.rdx, regs.r8, regs.r9];
    let argsStrings = args.map (c => c.toString(16));
    
    let HeapHandle = argsStrings[0];
    let Flags = argsStrings[1];
    let Size = argsStrings[2];
    
    MyLogn (`RtlAllocateHeap: HeapHandle: ${HeapHandle}, Flags: ${Flags}, Size: ${Size}`);
}


function BpCreateFileWHandler () {
    
    let regs = host.currentThread.Registers.User;
    let args = [regs.rcx, regs.rdx, regs.r8, regs.r9];
    
    let fileName = host.memory.readWideString (regs.rcx);
    
    MyLogn (`CreateFile (${fileName})`);
    
    return false;
}


function SetBreakpointByName (moduleName, symbolName, bpHandler) {
    
    let ctl = host.namespace.Debugger.Utility.Control;
    
    let breakpointAlreadySet = IsBreakpointExistByName (moduleName, symbolName);

    if (breakpointAlreadySet == false) {
        let Bp = ctl.SetBreakpointAtOffset (symbolName, 0, moduleName);
        Bp.Command = `dx @$scriptContents.${bpHandler.name}(); gc`;
        }
    else {
        MyLogn ('Breakpoint already set.');
        }

}


function SetBreakpointByAddr (addr, bpHandler) {
    
    let ctl = host.namespace.Debugger.Utility.Control;
    
    let breakpointAlreadySet = IsBreakpointExist (addr);

    if (breakpointAlreadySet == false) {
        ctl.ExecuteCommand (`bp /w "@$scriptContents.${bpHandler.name}()" ` + addr.toString(16));
        }
    else {
        MyLogn ('Breakpoint already set.');
        }

}


function invokeScript () {
    
    MyLogn ("invokeScript");

    ShowBreakpointsList();
    
    SetBreakpointByName ("ntdll.dll", "RtlAllocateHeap", BpRtlAllocateHeapHandler);
    SetBreakpointByAddr (host.getModuleSymbolAddress("kernel32.dll", "CreateFileW"), BpCreateFileWHandler);
    
    ShowBreakpointsList();

}


function uninitializeScript () {
    
    MyLogn ("uninitializeScript");
    
}
