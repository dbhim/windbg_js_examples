/// <reference path="JSProvider.d.ts" />


"use strict";


let dlog = host.diagnostics.debugLog;


function MyLog (str) {
    
    dlog (`[hook_SendMessage] ${str}`);
}


function MyLogn (str) {
    
    dlog (`[hook_SendMessage] ${str}\n`);
}


function ExecuteCommand (str) {
    
    let ctl = host.namespace.Debugger.Utility.Control;
    
    // MyLogn (str);
    
    return ctl.ExecuteCommand (str);
}


function IsBreakpointExistByName (moduleName, symbolName) {
    
    return host.currentProcess.Debug.Breakpoints.Any (
        c => c.OffsetExpression  == `${moduleName}!${symbolName}+0x0`
		);
}


function SetBreakpointByName (moduleName, symbolName, bpHandler) {
    
    let ctl = host.namespace.Debugger.Utility.Control;
    
    let breakpointAlreadySet = IsBreakpointExistByName (moduleName, symbolName);

    if (breakpointAlreadySet == false) {
        let Bp = ctl.SetBreakpointAtOffset (symbolName, 0, moduleName);
        Bp.Command = `dx @$scriptContents.${bpHandler.name}(); gc`;
        }
    else {
        //MyLogn ('Breakpoint already set.');
        }

}


function RegExpEscape (str) {
    
    return str.replace (/[-[\]{}()*+!<=:?.\/\\^$|#\s,]/g, '\\$&');
}


function GetMsgStrByCode (msgCode) {
    
    let script = "winmsg.js";
    let lodCmd = ".scriptload " + script;
    let unlodCmd = ".scriptunload " + script;
    let functionName = "GetMsgNameByNumber";
    
    ExecuteCommand (`.scriptload \${wsd_js_my_examples}\\${script}`);

    let execFunctionCommand = `@$scriptContents.${functionName}(${msgCode})`;
    let msgStr = ExecuteCommand (`dx ${execFunctionCommand}`);
    //let msgStr = ExecuteCommand (".echo hello");
    
    ExecuteCommand (`.scriptunload \${wsd_js_my_examples}\\${script}`);
    
    const re = new RegExp (RegExpEscape (execFunctionCommand) + " : (.*)");
    let match = msgStr[0].match (re);
    if (match) {
        // MyLogn ("Match: " + match[1]);
        return match[1];
        }
    else {
        // MyLogn (`${msgStr[0]}`);
        // MyLogn (`${execFunctionCommand} : (.*)`);
        }
    
    return undefined;
}


function SendMessageHandler() {
    
    let regs = host.currentThread.Registers.User;
    let args = [regs.rcx, regs.rdx, regs.r8, regs.r9];
    let argsStrings = args.map (c => c.toString(16));
    let msgStr = GetMsgStrByCode (args[1]) || "";
    
    MyLogn (`hWnd: ${args[0]}, Msg: ${msgStr}(${args[1]}), wParam: ${args[2]}, lParam: ${args[3]}`);
}


function initializeScript () {
    
    // import {GetMsgNameByNumber} from 'winmsg.js'
    
    MyLog ("initializeScript\n");

}


function invokeScript () {

    MyLog ("invokeScript\n");
    
    MyLogn (GetMsgStrByCode (1));
    
    SetBreakpointByName ("user32", "SendMessageW", SendMessageHandler);
    SetBreakpointByName ("user32", "SendMessageA", SendMessageHandler);
    
}


function uninitializeScript () {
	
    MyLog ("uninitializeScript\n");
}


function OutList (prefix, lists) {
    
    for (let line of lists) {
       MyLog (` ${prefix}${line} \n`);
       }
}


function ShowHelp () {

    OutList ("host.", Object.keys (host));
    OutList ("host.namespace.", Object.keys (host.namespace));
    OutList ("host.namespace.Debugger.", Object.keys (host.namespace.Debugger));
    OutList ("host.namespace.Debugger.Utility.", Object.keys (host.namespace.Debugger.Utility));
    OutList ("host.namespace.Debugger.Utility.Control.", Object.keys (host.namespace.Debugger.Utility.Control));

}
