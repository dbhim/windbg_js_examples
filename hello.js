/// <reference path="JSProvider.d.ts" />


"use strict";

// Root of Script
host.diagnostics.debugLog("***>; Code at the very top (root) of the script is always run \n");


function initializeScript()
{
    // Add code here that you want to run every time the script is loaded. 
    // We will just send a message to indicate that function was called.
    host.diagnostics.debugLog("***>; initializeScript was called \n");
    
}


function invokeScript()
{
    // Add code here that you want to run every time the script is executed. 
    // We will just send a message to indicate that function was called.
    host.diagnostics.debugLog("***>; invokeScript was called \n");
    
    //host.diagnostics.debugLog (Object.keys (host.namespace.Debugger.Utility.Control));
    //host.diagnostics.debugLog (Object.keys (host.namespace.Debugger.Utility));
    host.diagnostics.debugLog (Object.keys (host));
}


function uninitializeScript()
{
    // Add code here that you want to run every time the script is unloaded. 
    // We will just send a message to indicate that function was called.
    host.diagnostics.debugLog("***>; uninitializeScript was called\n");
}


function main()
{
    // main is just another function name in JavaScript
    // main is not called by .scriptload or .scriptrun  
    host.diagnostics.debugLog("***>; main was called \n");
}


function RunCommands()
{
    var ctl = host.namespace.Debugger.Utility.Control;   
    var output = ctl.ExecuteCommand("u NtCreateFile");
    host.diagnostics.debugLog("***> Displaying command output \n");

    for (var line of output) {
       host.diagnostics.debugLog("  ", line, "\n");
       }

    host.diagnostics.debugLog("***> Exiting RunCommands Function \n");

}
