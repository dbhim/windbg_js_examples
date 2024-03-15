/// <reference path="JSProvider.d.ts" />


"use strict";

let dlog = host.diagnostics.debugLog;
let scriptName = 'um_hello';


function MyLog (str) {
    
    dlog (`[${scriptName}] ${str}`);
}


function MyLogn (str) {
    
    MyLog (`${str}\n`);
}


class Attribute {
    constructor(Process, Name, Value) {
        this.__process = Process;
        this.Name = Name;
        this.Value = Value;
    }

    toString() {
        let S = 'Process: ' + this.__process.Name + ', ';
        S += 'Name: ' + this.Name + ', ';
        S += 'Value: ' + this.Value;
        return S;
    }
}


class Attributes {
    constructor() {
        this.__attrs = [];
    }

    push(Attr) {
        this.__attrs.push(Attr);
    }

    *[Symbol.iterator]() {
        for (let Attr of this.__attrs) {
            yield Attr;
        }
    }

    toString() {
        return 'Attributes';
    }
}


class Sub {
    constructor(Process) {
        this.__process = Process;
    }

    get SubFoo() {
        return 'SubFoo from ' + this.__process.Name;
    }

    get SubBar() {
        return 'SubBar from ' + this.__process.Name;
    }

    get Attributes() {
        let Attrs = new Attributes();
        Attrs.push (new Attribute(this.__process, 'attr0', 'value0'));
        Attrs.push (new Attribute(this.__process, 'attr1', 'value0'));
        return Attrs;
    }

    toString() {
        return 'Sub module';
    }
}


class DiaryOfAReverseEngineer {
    constructor(Process) {
        this.__process = Process;
    }

    get Foo() {
        return 'Foo from ' + this.__process.Name;
    }

    get Bar() {
        return 'Bar from ' + this.__process.Name;
    }

    Add(a, b) {
        return a + b;
    }

    get Sub() {
        return new Sub(this.__process);
    }

    toString() {
        return 'Diary of a reverse-engineer';
    }
}


class ProcessModelParent {
    get Hello () {
        return 'hello from ' + this.Name;
    }
    
    get DiaryOfAReverseEngineer() {
        return new DiaryOfAReverseEngineer(this);
    }
    
}


class CheckArchitecture {
//
// Add a property called 'ProcessArchitecture' on process.
//
    get ProcessArchitecture(){
        let guestStates = this.Threads.Any(t=> (!(t.GuestState === undefined) && t.GuestState.Architecture =="x86"));

        if(guestStates)
            return "x86";
        else
            return "x64";
        }
};


function TestInt64 () {
    
    let a = host.Int64 (0xFFFFFFFFFFFFFF10);
    MyLogn (`a = ${a}`);
    
    let b = host.parseInt64 ("0xFFFFFFFFFFFFFF10", 16)
    MyLogn (`b = ${b}`);
    
    let c = b.subtract(1);
    MyLogn (`c = b - 1 = ${c}`);
    
    c = b.add (1);
    MyLogn (`c = b + 1 = ${c}`);
    
    let d = c.subtract(b);
    MyLogn (`d = c - b = ${d}`);
    
    c = b.divide(4);
    MyLogn (`c = b / 4 = ${c}`);
    
    c = c.multiply (4);
    MyLogn (`c = c * 4 = ${c}`);
    
    MyLogn (`c == b + 1 = ${c.compareTo(b.add(1))}`);
    MyLogn (`c == b = ${c.compareTo(b)}`);
    MyLogn (`c == 1 = ${c.compareTo(1)}`);
    
    d = c.divide (0x1000);
    MyLogn (`d.asNumber() = ${d.asNumber().toString(16)}`);
    
    MyLogn (`c.toString() = ${c.toString(16)}`);
}


function initializeScript () {
    
    MyLog ("initializeScript\n");
    
    return [
        new host.apiVersionSupport(1, 1),
        new host.functionAlias(
            TestCommand,
            'UmTestCommand'),
        new host.namedModelParent(
            ProcessModelParent,
            'Debugger.Models.Process'),
        new host.namedModelParent(
            CheckArchitecture,
            "Debugger.Models.Process"),
        ];
}


function invokeScript () {
    
    MyLogn ("invokeScript");
    
    TestInt64();
    
    MyLogn (host.evaluateExpression('(unsigned __int64)0'));
    MyLogn (host.evaluateExpression('(unsigned __int64*)0'));
    //MyLogn (host.evaluateExpression('?? @@(ntdll!NtCreateFile)'));
    //MyLogn (host.evaluateExpression('@@(NtCreateFile)'));
    
    MyLogn ("NtCreateFile: " + host.getModuleSymbolAddress("ntdll.dll", "NtCreateFile").toString(16));
    MyLogn (host.getModuleSymbol("ntdll.dll", "NtCreateFile", "void*"));
    
    let WideStr = host.currentProcess.Environment.EnvironmentBlock.ProcessParameters.ImagePathName.Buffer;
    MyLogn (host.memory.readWideString(WideStr));
    let WideStrAddress = WideStr.address;
    MyLogn (host.memory.readWideString(WideStrAddress));
    
    
    //MyLogn (host.evaluateExpression('(_TEB*)0xb87f4e4000').FlsData);
    //MyLogn (host.evaluateExpression('(_TEB*)0xb87f4e4000').FlsData.address);
    
    //host.namespace.Debugger.Utility.Control.ExecuteCommand ("dx @$curprocess; !UmTestCommand 11");

}


function uninitializeScript () {
	
    MyLogn ("uninitializeScript");
}


function TestCommand (param) {
    
    MyLogn (`TestCommand with param = 0x${(param).toString(16)}`);
}
