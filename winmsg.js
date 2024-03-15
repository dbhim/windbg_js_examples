"use strict";


let dlog = host.diagnostics.debugLog;


function MyLog (str) {
    
    dlog (`[winmsg] ${str}`);
}


function MyLogn (str) {
    
    dlog (`[winmsg] ${str}\n`);
}


function ShowMessageName(msg){
    switch (parseInt(msg))
    {
    case 0:
        host.diagnostics.debugLog("WM_NULL");
        break;
    case 1:
        host.diagnostics.debugLog("WM_CREATE");
        break;
    case 2:
        host.diagnostics.debugLog("WM_DESTROY");
        break;
    case 3:
        host.diagnostics.debugLog("WM_MOVE");
        break;
    case 5:
        host.diagnostics.debugLog("WM_SIZE");
        break;
    case 6:
        host.diagnostics.debugLog("WM_ACTIVATE");
        break;
    case 7:
        host.diagnostics.debugLog("WM_SETFOCUS");
        break;
    case 8:
        host.diagnostics.debugLog("WM_KILLFOCUS");
        break;
    case 10:
        host.diagnostics.debugLog("WM_ENABLE");
        break;
    case 11:
        host.diagnostics.debugLog("WM_SETREDRAW");
        break;
    case 12:
        host.diagnostics.debugLog("WM_SETTEXT");
        break;
    case 13:
        host.diagnostics.debugLog("WM_GETTEXT");
        break;
    case 14:
        host.diagnostics.debugLog("WM_GETTEXTLENGTH");
        break;
    case 15:
        host.diagnostics.debugLog("WM_PAINT");
        break;
    case 16:
        host.diagnostics.debugLog("WM_CLOSE");
        break;
    case 17:
        host.diagnostics.debugLog("WM_QUERYENDSESSION");
        break;
    case 18:
        host.diagnostics.debugLog("WM_QUIT");
        break;
    case 19:
        host.diagnostics.debugLog("WM_QUERYOPEN");
        break;
    case 20:
        host.diagnostics.debugLog("WM_ERASEBKGND");
        break;
    case 21:
        host.diagnostics.debugLog("WM_SYSCOLORCHANGE");
        break;
    case 22:
        host.diagnostics.debugLog("WM_ENDSESSION");
        break;
    case 24:
        host.diagnostics.debugLog("WM_SHOWWINDOW");
        break;
    case 25:
        host.diagnostics.debugLog("WM_CTLCOLOR");
        break;
    case 26:
        host.diagnostics.debugLog("WM_WININICHANGE");
        break;
    case 27:
        host.diagnostics.debugLog("WM_DEVMODECHANGE");
        break;
    case 28:
        host.diagnostics.debugLog("WM_ACTIVATEAPP");
        break;
    case 29:
        host.diagnostics.debugLog("WM_FONTCHANGE");
        break;
    case 30:
        host.diagnostics.debugLog("WM_TIMECHANGE");
        break;
    case 31:
        host.diagnostics.debugLog("WM_CANCELMODE");
        break;
    case 32:
        host.diagnostics.debugLog("WM_SETCURSOR");
        break;
    case 33:
        host.diagnostics.debugLog("WM_MOUSEACTIVATE");
        break;
    case 34:
        host.diagnostics.debugLog("WM_CHILDACTIVATE");
        break;
    case 35:
        host.diagnostics.debugLog("WM_QUEUESYNC");
        break;
    case 36:
        host.diagnostics.debugLog("WM_GETMINMAXINFO");
        break;
    case 38:
        host.diagnostics.debugLog("WM_PAINTICON");
        break;
    case 39:
        host.diagnostics.debugLog("WM_ICONERASEBKGND");
        break;
    case 40:
        host.diagnostics.debugLog("WM_NEXTDLGCTL");
        break;
    case 42:
        host.diagnostics.debugLog("WM_SPOOLERSTATUS");
        break;
    case 43:
        host.diagnostics.debugLog("WM_DRAWITEM");
        break;
    case 44:
        host.diagnostics.debugLog("WM_MEASUREITEM");
        break;
    case 45:
        host.diagnostics.debugLog("WM_DELETEITEM");
        break;
    case 46:
        host.diagnostics.debugLog("WM_VKEYTOITEM");
        break;
    case 47:
        host.diagnostics.debugLog("WM_CHARTOITEM");
        break;
    case 48:
        host.diagnostics.debugLog("WM_SETFONT");
        break;
    case 49:
        host.diagnostics.debugLog("WM_GETFONT");
        break;
    case 50:
        host.diagnostics.debugLog("WM_SETHOTKEY");
        break;
    case 51:
        host.diagnostics.debugLog("WM_GETHOTKEY");
        break;
    case 55:
        host.diagnostics.debugLog("WM_QUERYDRAGICON");
        break;
    case 57:
        host.diagnostics.debugLog("WM_COMPAREITEM");
        break;
    case 61:
        host.diagnostics.debugLog("WM_GETOBJECT");
        break;
    case 65:
        host.diagnostics.debugLog("WM_COMPACTING");
        break;
    case 68:
        host.diagnostics.debugLog("WM_COMMNOTIFY");
        break;
    case 70:
        host.diagnostics.debugLog("WM_WINDOWPOSCHANGING");
        break;
    case 71:
        host.diagnostics.debugLog("WM_WINDOWPOSCHANGED");
        break;
    case 72:
        host.diagnostics.debugLog("WM_POWER");
        break;
    case 73:
        host.diagnostics.debugLog("WM_COPYGLOBALDATA");
        break;
    case 74:
        host.diagnostics.debugLog("WM_COPYDATA");
        break;
    case 75:
        host.diagnostics.debugLog("WM_CANCELJOURNAL");
        break;
    case 78:
        host.diagnostics.debugLog("WM_NOTIFY");
        break;
    case 80:
        host.diagnostics.debugLog("WM_INPUTLANGCHANGEREQUEST");
        break;
    case 81:
        host.diagnostics.debugLog("WM_INPUTLANGCHANGE");
        break;
    case 82:
        host.diagnostics.debugLog("WM_TCARD");
        break;
    case 83:
        host.diagnostics.debugLog("WM_HELP");
        break;
    case 84:
        host.diagnostics.debugLog("WM_USERCHANGED");
        break;
    case 85:
        host.diagnostics.debugLog("WM_NOTIFYFORMAT");
        break;
    case 123:
        host.diagnostics.debugLog("WM_CONTEXTMENU");
        break;
    case 124:
        host.diagnostics.debugLog("WM_STYLECHANGING");
        break;
    case 125:
        host.diagnostics.debugLog("WM_STYLECHANGED");
        break;
    case 126:
        host.diagnostics.debugLog("WM_DISPLAYCHANGE");
        break;
    case 127:
        host.diagnostics.debugLog("WM_GETICON");
        break;
    case 128:
        host.diagnostics.debugLog("WM_SETICON");
        break;
    case 129:
        host.diagnostics.debugLog("WM_NCCREATE");
        break;
    case 130:
        host.diagnostics.debugLog("WM_NCDESTROY");
        break;
    case 131:
        host.diagnostics.debugLog("WM_NCCALCSIZE");
        break;
    case 132:
        host.diagnostics.debugLog("WM_NCHITTEST");
        break;
    case 133:
        host.diagnostics.debugLog("WM_NCPAINT");
        break;
    case 134:
        host.diagnostics.debugLog("WM_NCACTIVATE");
        break;
    case 135:
        host.diagnostics.debugLog("WM_GETDLGCODE");
        break;
    case 136:
        host.diagnostics.debugLog("WM_SYNCPAINT");
        break;
    case 160:
        host.diagnostics.debugLog("WM_NCMOUSEMOVE");
        break;
    case 161:
        host.diagnostics.debugLog("WM_NCLBUTTONDOWN");
        break;
    case 162:
        host.diagnostics.debugLog("WM_NCLBUTTONUP");
        break;
    case 163:
        host.diagnostics.debugLog("WM_NCLBUTTONDBLCLK");
        break;
    case 164:
        host.diagnostics.debugLog("WM_NCRBUTTONDOWN");
        break;
    case 165:
        host.diagnostics.debugLog("WM_NCRBUTTONUP");
        break;
    case 166:
        host.diagnostics.debugLog("WM_NCRBUTTONDBLCLK");
        break;
    case 167:
        host.diagnostics.debugLog("WM_NCMBUTTONDOWN");
        break;
    case 168:
        host.diagnostics.debugLog("WM_NCMBUTTONUP");
        break;
    case 169:
        host.diagnostics.debugLog("WM_NCMBUTTONDBLCLK");
        break;
    case 171:
        host.diagnostics.debugLog("WM_NCXBUTTONDOWN");
        break;
    case 172:
        host.diagnostics.debugLog("WM_NCXBUTTONUP");
        break;
    case 173:
        host.diagnostics.debugLog("WM_NCXBUTTONDBLCLK");
        break;
    case 176:
        host.diagnostics.debugLog("EM_GETSEL");
        break;
    case 177:
        host.diagnostics.debugLog("EM_SETSEL");
        break;
    case 178:
        host.diagnostics.debugLog("EM_GETRECT");
        break;
    case 179:
        host.diagnostics.debugLog("EM_SETRECT");
        break;
    case 180:
        host.diagnostics.debugLog("EM_SETRECTNP");
        break;
    case 181:
        host.diagnostics.debugLog("EM_SCROLL");
        break;
    case 182:
        host.diagnostics.debugLog("EM_LINESCROLL");
        break;
    case 183:
        host.diagnostics.debugLog("EM_SCROLLCARET");
        break;
    case 184:
        host.diagnostics.debugLog("EM_GETMODIFY");
        break;
    case 185:
        host.diagnostics.debugLog("EM_SETMODIFY");
        break;
    case 186:
        host.diagnostics.debugLog("EM_GETLINECOUNT");
        break;
    case 187:
        host.diagnostics.debugLog("EM_LINEINDEX");
        break;
    case 188:
        host.diagnostics.debugLog("EM_SETHANDLE");
        break;
    case 189:
        host.diagnostics.debugLog("EM_GETHANDLE");
        break;
    case 190:
        host.diagnostics.debugLog("EM_GETTHUMB");
        break;
    case 193:
        host.diagnostics.debugLog("EM_LINELENGTH");
        break;
    case 194:
        host.diagnostics.debugLog("EM_REPLACESEL");
        break;
    case 195:
        host.diagnostics.debugLog("EM_SETFONT");
        break;
    case 196:
        host.diagnostics.debugLog("EM_GETLINE");
        break;
    case 197:
        host.diagnostics.debugLog("EM_LIMITTEXT");
        break;
    case 197:
        host.diagnostics.debugLog("EM_SETLIMITTEXT");
        break;
    case 198:
        host.diagnostics.debugLog("EM_CANUNDO");
        break;
    case 199:
        host.diagnostics.debugLog("EM_UNDO");
        break;
    case 200:
        host.diagnostics.debugLog("EM_FMTLINES");
        break;
    case 201:
        host.diagnostics.debugLog("EM_LINEFROMCHAR");
        break;
    case 202:
        host.diagnostics.debugLog("EM_SETWORDBREAK");
        break;
    case 203:
        host.diagnostics.debugLog("EM_SETTABSTOPS");
        break;
    case 204:
        host.diagnostics.debugLog("EM_SETPASSWORDCHAR");
        break;
    case 205:
        host.diagnostics.debugLog("EM_EMPTYUNDOBUFFER");
        break;
    case 206:
        host.diagnostics.debugLog("EM_GETFIRSTVISIBLELINE");
        break;
    case 207:
        host.diagnostics.debugLog("EM_SETREADONLY");
        break;
    case 208:
        host.diagnostics.debugLog("EM_SETWORDBREAKPROC");
        break;
    case 209:
        host.diagnostics.debugLog("EM_GETWORDBREAKPROC");
        break;
    case 210:
        host.diagnostics.debugLog("EM_GETPASSWORDCHAR");
        break;
    case 211:
        host.diagnostics.debugLog("EM_SETMARGINS");
        break;
    case 212:
        host.diagnostics.debugLog("EM_GETMARGINS");
        break;
    case 213:
        host.diagnostics.debugLog("EM_GETLIMITTEXT");
        break;
    case 214:
        host.diagnostics.debugLog("EM_POSFROMCHAR");
        break;
    case 215:
        host.diagnostics.debugLog("EM_CHARFROMPOS");
        break;
    case 216:
        host.diagnostics.debugLog("EM_SETIMESTATUS");
        break;
    case 217:
        host.diagnostics.debugLog("EM_GETIMESTATUS");
        break;
    case 224:
        host.diagnostics.debugLog("SBM_SETPOS");
        break;
    case 225:
        host.diagnostics.debugLog("SBM_GETPOS");
        break;
    case 226:
        host.diagnostics.debugLog("SBM_SETRANGE");
        break;
    case 227:
        host.diagnostics.debugLog("SBM_GETRANGE");
        break;
    case 228:
        host.diagnostics.debugLog("SBM_ENABLE_ARROWS");
        break;
    case 230:
        host.diagnostics.debugLog("SBM_SETRANGEREDRAW");
        break;
    case 233:
        host.diagnostics.debugLog("SBM_SETSCROLLINFO");
        break;
    case 234:
        host.diagnostics.debugLog("SBM_GETSCROLLINFO");
        break;
    case 235:
        host.diagnostics.debugLog("SBM_GETSCROLLBARINFO");
        break;
    case 240:
        host.diagnostics.debugLog("BM_GETCHECK");
        break;
    case 241:
        host.diagnostics.debugLog("BM_SETCHECK");
        break;
    case 242:
        host.diagnostics.debugLog("BM_GETSTATE");
        break;
    case 243:
        host.diagnostics.debugLog("BM_SETSTATE");
        break;
    case 244:
        host.diagnostics.debugLog("BM_SETSTYLE");
        break;
    case 245:
        host.diagnostics.debugLog("BM_CLICK");
        break;
    case 246:
        host.diagnostics.debugLog("BM_GETIMAGE");
        break;
    case 247:
        host.diagnostics.debugLog("BM_SETIMAGE");
        break;
    case 248:
        host.diagnostics.debugLog("BM_SETDONTCLICK");
        break;
    case 255:
        host.diagnostics.debugLog("WM_INPUT");
        break;
    case 256:
        host.diagnostics.debugLog("WM_KEYDOWN");
        break;
    case 256:
        host.diagnostics.debugLog("WM_KEYFIRST");
        break;
    case 257:
        host.diagnostics.debugLog("WM_KEYUP");
        break;
    case 258:
        host.diagnostics.debugLog("WM_CHAR");
        break;
    case 259:
        host.diagnostics.debugLog("WM_DEADCHAR");
        break;
    case 260:
        host.diagnostics.debugLog("WM_SYSKEYDOWN");
        break;
    case 261:
        host.diagnostics.debugLog("WM_SYSKEYUP");
        break;
    case 262:
        host.diagnostics.debugLog("WM_SYSCHAR");
        break;
    case 263:
        host.diagnostics.debugLog("WM_SYSDEADCHAR");
        break;
    case 265:
        host.diagnostics.debugLog("WM_UNICHAR / WM_KEYLAST");
        break;
    case 265:
        host.diagnostics.debugLog("WM_WNT_CONVERTREQUESTEX");
        break;
    case 266:
        host.diagnostics.debugLog("WM_CONVERTREQUEST");
        break;
    case 267:
        host.diagnostics.debugLog("WM_CONVERTRESULT");
        break;
    case 268:
        host.diagnostics.debugLog("WM_INTERIM");
        break;
    case 269:
        host.diagnostics.debugLog("WM_IME_STARTCOMPOSITION");
        break;
    case 270:
        host.diagnostics.debugLog("WM_IME_ENDCOMPOSITION");
        break;
    case 271:
        host.diagnostics.debugLog("WM_IME_COMPOSITION");
        break;
    case 271:
        host.diagnostics.debugLog("WM_IME_KEYLAST");
        break;
    case 272:
        host.diagnostics.debugLog("WM_INITDIALOG");
        break;
    case 273:
        host.diagnostics.debugLog("WM_COMMAND");
        break;
    case 274:
        host.diagnostics.debugLog("WM_SYSCOMMAND");
        break;
    case 275:
        host.diagnostics.debugLog("WM_TIMER");
        break;
    case 276:
        host.diagnostics.debugLog("WM_HSCROLL");
        break;
    case 277:
        host.diagnostics.debugLog("WM_VSCROLL");
        break;
    case 278:
        host.diagnostics.debugLog("WM_INITMENU");
        break;
    case 279:
        host.diagnostics.debugLog("WM_INITMENUPOPUP");
        break;
    case 280:
        host.diagnostics.debugLog("WM_SYSTIMER");
        break;
    case 287:
        host.diagnostics.debugLog("WM_MENUSELECT");
        break;
    case 288:
        host.diagnostics.debugLog("WM_MENUCHAR");
        break;
    case 289:
        host.diagnostics.debugLog("WM_ENTERIDLE");
        break;
    case 290:
        host.diagnostics.debugLog("WM_MENURBUTTONUP");
        break;
    case 291:
        host.diagnostics.debugLog("WM_MENUDRAG");
        break;
    case 292:
        host.diagnostics.debugLog("WM_MENUGETOBJECT");
        break;
    case 293:
        host.diagnostics.debugLog("WM_UNINITMENUPOPUP");
        break;
    case 294:
        host.diagnostics.debugLog("WM_MENUCOMMAND");
        break;
    case 295:
        host.diagnostics.debugLog("WM_CHANGEUISTATE");
        break;
    case 296:
        host.diagnostics.debugLog("WM_UPDATEUISTATE");
        break;
    case 297:
        host.diagnostics.debugLog("WM_QUERYUISTATE");
        break;
    case 306:
        host.diagnostics.debugLog("WM_CTLCOLORMSGBOX");
        break;
    case 307:
        host.diagnostics.debugLog("WM_CTLCOLOREDIT");
        break;
    case 308:
        host.diagnostics.debugLog("WM_CTLCOLORLISTBOX");
        break;
    case 309:
        host.diagnostics.debugLog("WM_CTLCOLORBTN");
        break;
    case 310:
        host.diagnostics.debugLog("WM_CTLCOLORDLG");
        break;
    case 311:
        host.diagnostics.debugLog("WM_CTLCOLORSCROLLBAR");
        break;
    case 312:
        host.diagnostics.debugLog("WM_CTLCOLORSTATIC");
        break;
    case 512:
        host.diagnostics.debugLog("WM_MOUSEFIRST");
        break;
    case 512:
        host.diagnostics.debugLog("WM_MOUSEMOVE");
        break;
    case 513:
        host.diagnostics.debugLog("WM_LBUTTONDOWN");
        break;
    case 514:
        host.diagnostics.debugLog("WM_LBUTTONUP");
        break;
    case 515:
        host.diagnostics.debugLog("WM_LBUTTONDBLCLK");
        break;
    case 516:
        host.diagnostics.debugLog("WM_RBUTTONDOWN");
        break;
    case 517:
        host.diagnostics.debugLog("WM_RBUTTONUP");
        break;
    case 518:
        host.diagnostics.debugLog("WM_RBUTTONDBLCLK");
        break;
    case 519:
        host.diagnostics.debugLog("WM_MBUTTONDOWN");
        break;
    case 520:
        host.diagnostics.debugLog("WM_MBUTTONUP");
        break;
    case 521:
        host.diagnostics.debugLog("WM_MBUTTONDBLCLK");
        break;
    case 521:
        host.diagnostics.debugLog("WM_MOUSELAST");
        break;
    case 522:
        host.diagnostics.debugLog("WM_MOUSEWHEEL");
        break;
    case 523:
        host.diagnostics.debugLog("WM_XBUTTONDOWN");
        break;
    case 524:
        host.diagnostics.debugLog("WM_XBUTTONUP");
        break;
    case 525:
        host.diagnostics.debugLog("WM_XBUTTONDBLCLK");
        break;
    case 526:
        host.diagnostics.debugLog("WM_MOUSEHWHEEL");
        break;
    case 528:
        host.diagnostics.debugLog("WM_PARENTNOTIFY");
        break;
    case 529:
        host.diagnostics.debugLog("WM_ENTERMENULOOP");
        break;
    case 530:
        host.diagnostics.debugLog("WM_EXITMENULOOP");
        break;
    case 531:
        host.diagnostics.debugLog("WM_NEXTMENU");
        break;
    case 532:
        host.diagnostics.debugLog("WM_SIZING");
        break;
    case 533:
        host.diagnostics.debugLog("WM_CAPTURECHANGED");
        break;
    case 534:
        host.diagnostics.debugLog("WM_MOVING");
        break;
    case 536:
        host.diagnostics.debugLog("WM_POWERBROADCAST");
        break;
    case 537:
        host.diagnostics.debugLog("WM_DEVICECHANGE");
        break;
    case 544:
        host.diagnostics.debugLog("WM_MDICREATE");
        break;
    case 545:
        host.diagnostics.debugLog("WM_MDIDESTROY");
        break;
    case 546:
        host.diagnostics.debugLog("WM_MDIACTIVATE");
        break;
    case 547:
        host.diagnostics.debugLog("WM_MDIRESTORE");
        break;
    case 548:
        host.diagnostics.debugLog("WM_MDINEXT");
        break;
    case 549:
        host.diagnostics.debugLog("WM_MDIMAXIMIZE");
        break;
    case 550:
        host.diagnostics.debugLog("WM_MDITILE");
        break;
    case 551:
        host.diagnostics.debugLog("WM_MDICASCADE");
        break;
    case 552:
        host.diagnostics.debugLog("WM_MDIICONARRANGE");
        break;
    case 553:
        host.diagnostics.debugLog("WM_MDIGETACTIVE");
        break;
    case 560:
        host.diagnostics.debugLog("WM_MDISETMENU");
        break;
    case 561:
        host.diagnostics.debugLog("WM_ENTERSIZEMOVE");
        break;
    case 562:
        host.diagnostics.debugLog("WM_EXITSIZEMOVE");
        break;
    case 563:
        host.diagnostics.debugLog("WM_DROPFILES");
        break;
    case 564:
        host.diagnostics.debugLog("WM_MDIREFRESHMENU");
        break;
    case 640:
        host.diagnostics.debugLog("WM_IME_REPORT");
        break;
    case 641:
        host.diagnostics.debugLog("WM_IME_SETCONTEXT");
        break;
    case 642:
        host.diagnostics.debugLog("WM_IME_NOTIFY");
        break;
    case 643:
        host.diagnostics.debugLog("WM_IME_CONTROL");
        break;
    case 644:
        host.diagnostics.debugLog("WM_IME_COMPOSITIONFULL");
        break;
    case 645:
        host.diagnostics.debugLog("WM_IME_SELECT");
        break;
    case 646:
        host.diagnostics.debugLog("WM_IME_CHAR");
        break;
    case 648:
        host.diagnostics.debugLog("WM_IME_REQUEST");
        break;
    case 656:
        host.diagnostics.debugLog("WM_IMEKEYDOWN");
        break;
    case 656:
        host.diagnostics.debugLog("WM_IME_KEYDOWN");
        break;
    case 657:
        host.diagnostics.debugLog("WM_IMEKEYUP");
        break;
    case 657:
        host.diagnostics.debugLog("WM_IME_KEYUP");
        break;
    case 672:
        host.diagnostics.debugLog("WM_NCMOUSEHOVER");
        break;
    case 673:
        host.diagnostics.debugLog("WM_MOUSEHOVER");
        break;
    case 674:
        host.diagnostics.debugLog("WM_NCMOUSELEAVE");
        break;
    case 675:
        host.diagnostics.debugLog("WM_MOUSELEAVE");
        break;
    case 768:
        host.diagnostics.debugLog("WM_CUT");
        break;
    case 769:
        host.diagnostics.debugLog("WM_COPY");
        break;
    case 770:
        host.diagnostics.debugLog("WM_PASTE");
        break;
    case 771:
        host.diagnostics.debugLog("WM_CLEAR");
        break;
    case 772:
        host.diagnostics.debugLog("WM_UNDO");
        break;
    case 773:
        host.diagnostics.debugLog("WM_RENDERFORMAT");
        break;
    case 774:
        host.diagnostics.debugLog("WM_RENDERALLFORMATS");
        break;
    case 775:
        host.diagnostics.debugLog("WM_DESTROYCLIPBOARD");
        break;
    case 776:
        host.diagnostics.debugLog("WM_DRAWCLIPBOARD");
        break;
    case 777:
        host.diagnostics.debugLog("WM_PAINTCLIPBOARD");
        break;
    case 778:
        host.diagnostics.debugLog("WM_VSCROLLCLIPBOARD");
        break;
    case 779:
        host.diagnostics.debugLog("WM_SIZECLIPBOARD");
        break;
    case 780:
        host.diagnostics.debugLog("WM_ASKCBFORMATNAME");
        break;
    case 781:
        host.diagnostics.debugLog("WM_CHANGECBCHAIN");
        break;
    case 782:
        host.diagnostics.debugLog("WM_HSCROLLCLIPBOARD");
        break;
    case 783:
        host.diagnostics.debugLog("WM_QUERYNEWPALETTE");
        break;
    case 784:
        host.diagnostics.debugLog("WM_PALETTEISCHANGING");
        break;
    case 785:
        host.diagnostics.debugLog("WM_PALETTECHANGED");
        break;
    case 786:
        host.diagnostics.debugLog("WM_HOTKEY");
        break;
    case 791:
        host.diagnostics.debugLog("WM_PRINT");
        break;
    case 792:
        host.diagnostics.debugLog("WM_PRINTCLIENT");
        break;
    case 793:
        host.diagnostics.debugLog("WM_APPCOMMAND");
        break;
    case 856:
        host.diagnostics.debugLog("WM_HANDHELDFIRST");
        break;
    case 863:
        host.diagnostics.debugLog("WM_HANDHELDLAST");
        break;
    case 864:
        host.diagnostics.debugLog("WM_AFXFIRST");
        break;
    case 895:
        host.diagnostics.debugLog("WM_AFXLAST");
        break;
    case 896:
        host.diagnostics.debugLog("WM_PENWINFIRST");
        break;
    case 897:
        host.diagnostics.debugLog("WM_RCRESULT");
        break;
    case 898:
        host.diagnostics.debugLog("WM_HOOKRCRESULT");
        break;
    case 899:
        host.diagnostics.debugLog("WM_GLOBALRCCHANGE");
        break;
    case 899:
        host.diagnostics.debugLog("WM_PENMISCINFO");
        break;
    case 900:
        host.diagnostics.debugLog("WM_SKB");
        break;
    case 901:
        host.diagnostics.debugLog("WM_HEDITCTL");
        break;
    case 901:
        host.diagnostics.debugLog("WM_PENCTL");
        break;
    case 902:
        host.diagnostics.debugLog("WM_PENMISC");
        break;
    case 903:
        host.diagnostics.debugLog("WM_CTLINIT");
        break;
    case 904:
        host.diagnostics.debugLog("WM_PENEVENT");
        break;
    case 911:
        host.diagnostics.debugLog("WM_PENWINLAST");
        break;
    case 1024:
        host.diagnostics.debugLog("DDM_SETFMT");
        break;
    case 1024:
        host.diagnostics.debugLog("DM_GETDEFID");
        break;
    case 1024:
        host.diagnostics.debugLog("NIN_SELECT");
        break;
    case 1024:
        host.diagnostics.debugLog("TBM_GETPOS");
        break;
    case 1024:
        host.diagnostics.debugLog("WM_PSD_PAGESETUPDLG");
        break;
    case 1024:
        host.diagnostics.debugLog("WM_USER");
        break;
    case 1025:
        host.diagnostics.debugLog("CBEM_INSERTITEMA");
        break;
    case 1025:
        host.diagnostics.debugLog("DDM_DRAW");
        break;
    case 1025:
        host.diagnostics.debugLog("DM_SETDEFID");
        break;
    case 1025:
        host.diagnostics.debugLog("HKM_SETHOTKEY");
        break;
    case 1025:
        host.diagnostics.debugLog("PBM_SETRANGE");
        break;
    case 1025:
        host.diagnostics.debugLog("RB_INSERTBANDA");
        break;
    case 1025:
        host.diagnostics.debugLog("SB_SETTEXTA");
        break;
    case 1025:
        host.diagnostics.debugLog("TB_ENABLEBUTTON");
        break;
    case 1025:
        host.diagnostics.debugLog("TBM_GETRANGEMIN");
        break;
    case 1025:
        host.diagnostics.debugLog("TTM_ACTIVATE");
        break;
    case 1025:
        host.diagnostics.debugLog("WM_CHOOSEFONT_GETLOGFONT");
        break;
    case 1025:
        host.diagnostics.debugLog("WM_PSD_FULLPAGERECT");
        break;
    case 1026:
        host.diagnostics.debugLog("CBEM_SETIMAGELIST");
        break;
    case 1026:
        host.diagnostics.debugLog("DDM_CLOSE");
        break;
    case 1026:
        host.diagnostics.debugLog("DM_REPOSITION");
        break;
    case 1026:
        host.diagnostics.debugLog("HKM_GETHOTKEY");
        break;
    case 1026:
        host.diagnostics.debugLog("PBM_SETPOS");
        break;
    case 1026:
        host.diagnostics.debugLog("RB_DELETEBAND");
        break;
    case 1026:
        host.diagnostics.debugLog("SB_GETTEXTA");
        break;
    case 1026:
        host.diagnostics.debugLog("TB_CHECKBUTTON");
        break;
    case 1026:
        host.diagnostics.debugLog("TBM_GETRANGEMAX");
        break;
    case 1026:
        host.diagnostics.debugLog("WM_PSD_MINMARGINRECT");
        break;
    case 1027:
        host.diagnostics.debugLog("CBEM_GETIMAGELIST");
        break;
    case 1027:
        host.diagnostics.debugLog("DDM_BEGIN");
        break;
    case 1027:
        host.diagnostics.debugLog("HKM_SETRULES");
        break;
    case 1027:
        host.diagnostics.debugLog("PBM_DELTAPOS");
        break;
    case 1027:
        host.diagnostics.debugLog("RB_GETBARINFO");
        break;
    case 1027:
        host.diagnostics.debugLog("SB_GETTEXTLENGTHA");
        break;
    case 1027:
        host.diagnostics.debugLog("TBM_GETTIC");
        break;
    case 1027:
        host.diagnostics.debugLog("TB_PRESSBUTTON");
        break;
    case 1027:
        host.diagnostics.debugLog("TTM_SETDELAYTIME");
        break;
    case 1027:
        host.diagnostics.debugLog("WM_PSD_MARGINRECT");
        break;
    case 1028:
        host.diagnostics.debugLog("CBEM_GETITEMA");
        break;
    case 1028:
        host.diagnostics.debugLog("DDM_END");
        break;
    case 1028:
        host.diagnostics.debugLog("PBM_SETSTEP");
        break;
    case 1028:
        host.diagnostics.debugLog("RB_SETBARINFO");
        break;
    case 1028:
        host.diagnostics.debugLog("SB_SETPARTS");
        break;
    case 1028:
        host.diagnostics.debugLog("TB_HIDEBUTTON");
        break;
    case 1028:
        host.diagnostics.debugLog("TBM_SETTIC");
        break;
    case 1028:
        host.diagnostics.debugLog("TTM_ADDTOOLA");
        break;
    case 1028:
        host.diagnostics.debugLog("WM_PSD_GREEKTEXTRECT");
        break;
    case 1029:
        host.diagnostics.debugLog("CBEM_SETITEMA");
        break;
    case 1029:
        host.diagnostics.debugLog("PBM_STEPIT");
        break;
    case 1029:
        host.diagnostics.debugLog("TB_INDETERMINATE");
        break;
    case 1029:
        host.diagnostics.debugLog("TBM_SETPOS");
        break;
    case 1029:
        host.diagnostics.debugLog("TTM_DELTOOLA");
        break;
    case 1029:
        host.diagnostics.debugLog("WM_PSD_ENVSTAMPRECT");
        break;
    case 1030:
        host.diagnostics.debugLog("CBEM_GETCOMBOCONTROL");
        break;
    case 1030:
        host.diagnostics.debugLog("PBM_SETRANGE32");
        break;
    case 1030:
        host.diagnostics.debugLog("RB_SETBANDINFOA");
        break;
    case 1030:
        host.diagnostics.debugLog("SB_GETPARTS");
        break;
    case 1030:
        host.diagnostics.debugLog("TB_MARKBUTTON");
        break;
    case 1030:
        host.diagnostics.debugLog("TBM_SETRANGE");
        break;
    case 1030:
        host.diagnostics.debugLog("TTM_NEWTOOLRECTA");
        break;
    case 1030:
        host.diagnostics.debugLog("WM_PSD_YAFULLPAGERECT");
        break;
    case 1031:
        host.diagnostics.debugLog("CBEM_GETEDITCONTROL");
        break;
    case 1031:
        host.diagnostics.debugLog("PBM_GETRANGE");
        break;
    case 1031:
        host.diagnostics.debugLog("RB_SETPARENT");
        break;
    case 1031:
        host.diagnostics.debugLog("SB_GETBORDERS");
        break;
    case 1031:
        host.diagnostics.debugLog("TBM_SETRANGEMIN");
        break;
    case 1031:
        host.diagnostics.debugLog("TTM_RELAYEVENT");
        break;
    case 1032:
        host.diagnostics.debugLog("CBEM_SETEXSTYLE");
        break;
    case 1032:
        host.diagnostics.debugLog("PBM_GETPOS");
        break;
    case 1032:
        host.diagnostics.debugLog("RB_HITTEST");
        break;
    case 1032:
        host.diagnostics.debugLog("SB_SETMINHEIGHT");
        break;
    case 1032:
        host.diagnostics.debugLog("TBM_SETRANGEMAX");
        break;
    case 1032:
        host.diagnostics.debugLog("TTM_GETTOOLINFOA");
        break;
    case 1033:
        host.diagnostics.debugLog("CBEM_GETEXSTYLE");
        break;
    case 1033:
        host.diagnostics.debugLog("CBEM_GETEXTENDEDSTYLE");
        break;
    case 1033:
        host.diagnostics.debugLog("PBM_SETBARCOLOR");
        break;
    case 1033:
        host.diagnostics.debugLog("RB_GETRECT");
        break;
    case 1033:
        host.diagnostics.debugLog("SB_SIMPLE");
        break;
    case 1033:
        host.diagnostics.debugLog("TB_ISBUTTONENABLED");
        break;
    case 1033:
        host.diagnostics.debugLog("TBM_CLEARTICS");
        break;
    case 1033:
        host.diagnostics.debugLog("TTM_SETTOOLINFOA");
        break;
    case 1034:
        host.diagnostics.debugLog("CBEM_HASEDITCHANGED");
        break;
    case 1034:
        host.diagnostics.debugLog("RB_INSERTBANDW");
        break;
    case 1034:
        host.diagnostics.debugLog("SB_GETRECT");
        break;
    case 1034:
        host.diagnostics.debugLog("TB_ISBUTTONCHECKED");
        break;
    case 1034:
        host.diagnostics.debugLog("TBM_SETSEL");
        break;
    case 1034:
        host.diagnostics.debugLog("TTM_HITTESTA");
        break;
    case 1034:
        host.diagnostics.debugLog("WIZ_QUERYNUMPAGES");
        break;
    case 1035:
        host.diagnostics.debugLog("CBEM_INSERTITEMW");
        break;
    case 1035:
        host.diagnostics.debugLog("RB_SETBANDINFOW");
        break;
    case 1035:
        host.diagnostics.debugLog("SB_SETTEXTW");
        break;
    case 1035:
        host.diagnostics.debugLog("TB_ISBUTTONPRESSED");
        break;
    case 1035:
        host.diagnostics.debugLog("TBM_SETSELSTART");
        break;
    case 1035:
        host.diagnostics.debugLog("TTM_GETTEXTA");
        break;
    case 1035:
        host.diagnostics.debugLog("WIZ_NEXT");
        break;
    case 1036:
        host.diagnostics.debugLog("CBEM_SETITEMW");
        break;
    case 1036:
        host.diagnostics.debugLog("RB_GETBANDCOUNT");
        break;
    case 1036:
        host.diagnostics.debugLog("SB_GETTEXTLENGTHW");
        break;
    case 1036:
        host.diagnostics.debugLog("TB_ISBUTTONHIDDEN");
        break;
    case 1036:
        host.diagnostics.debugLog("TBM_SETSELEND");
        break;
    case 1036:
        host.diagnostics.debugLog("TTM_UPDATETIPTEXTA");
        break;
    case 1036:
        host.diagnostics.debugLog("WIZ_PREV");
        break;
    case 1037:
        host.diagnostics.debugLog("CBEM_GETITEMW");
        break;
    case 1037:
        host.diagnostics.debugLog("RB_GETROWCOUNT");
        break;
    case 1037:
        host.diagnostics.debugLog("SB_GETTEXTW");
        break;
    case 1037:
        host.diagnostics.debugLog("TB_ISBUTTONINDETERMINATE");
        break;
    case 1037:
        host.diagnostics.debugLog("TTM_GETTOOLCOUNT");
        break;
    case 1038:
        host.diagnostics.debugLog("CBEM_SETEXTENDEDSTYLE");
        break;
    case 1038:
        host.diagnostics.debugLog("RB_GETROWHEIGHT");
        break;
    case 1038:
        host.diagnostics.debugLog("SB_ISSIMPLE");
        break;
    case 1038:
        host.diagnostics.debugLog("TB_ISBUTTONHIGHLIGHTED");
        break;
    case 1038:
        host.diagnostics.debugLog("TBM_GETPTICS");
        break;
    case 1038:
        host.diagnostics.debugLog("TTM_ENUMTOOLSA");
        break;
    case 1039:
        host.diagnostics.debugLog("SB_SETICON");
        break;
    case 1039:
        host.diagnostics.debugLog("TBM_GETTICPOS");
        break;
    case 1039:
        host.diagnostics.debugLog("TTM_GETCURRENTTOOLA");
        break;
    case 1040:
        host.diagnostics.debugLog("RB_IDTOINDEX");
        break;
    case 1040:
        host.diagnostics.debugLog("SB_SETTIPTEXTA");
        break;
    case 1040:
        host.diagnostics.debugLog("TBM_GETNUMTICS");
        break;
    case 1040:
        host.diagnostics.debugLog("TTM_WINDOWFROMPOINT");
        break;
    case 1041:
        host.diagnostics.debugLog("RB_GETTOOLTIPS");
        break;
    case 1041:
        host.diagnostics.debugLog("SB_SETTIPTEXTW");
        break;
    case 1041:
        host.diagnostics.debugLog("TBM_GETSELSTART");
        break;
    case 1041:
        host.diagnostics.debugLog("TB_SETSTATE");
        break;
    case 1041:
        host.diagnostics.debugLog("TTM_TRACKACTIVATE");
        break;
    case 1042:
        host.diagnostics.debugLog("RB_SETTOOLTIPS");
        break;
    case 1042:
        host.diagnostics.debugLog("SB_GETTIPTEXTA");
        break;
    case 1042:
        host.diagnostics.debugLog("TB_GETSTATE");
        break;
    case 1042:
        host.diagnostics.debugLog("TBM_GETSELEND");
        break;
    case 1042:
        host.diagnostics.debugLog("TTM_TRACKPOSITION");
        break;
    case 1043:
        host.diagnostics.debugLog("RB_SETBKCOLOR");
        break;
    case 1043:
        host.diagnostics.debugLog("SB_GETTIPTEXTW");
        break;
    case 1043:
        host.diagnostics.debugLog("TB_ADDBITMAP");
        break;
    case 1043:
        host.diagnostics.debugLog("TBM_CLEARSEL");
        break;
    case 1043:
        host.diagnostics.debugLog("TTM_SETTIPBKCOLOR");
        break;
    case 1044:
        host.diagnostics.debugLog("RB_GETBKCOLOR");
        break;
    case 1044:
        host.diagnostics.debugLog("SB_GETICON");
        break;
    case 1044:
        host.diagnostics.debugLog("TB_ADDBUTTONSA");
        break;
    case 1044:
        host.diagnostics.debugLog("TBM_SETTICFREQ");
        break;
    case 1044:
        host.diagnostics.debugLog("TTM_SETTIPTEXTCOLOR");
        break;
    case 1045:
        host.diagnostics.debugLog("RB_SETTEXTCOLOR");
        break;
    case 1045:
        host.diagnostics.debugLog("TB_INSERTBUTTONA");
        break;
    case 1045:
        host.diagnostics.debugLog("TBM_SETPAGESIZE");
        break;
    case 1045:
        host.diagnostics.debugLog("TTM_GETDELAYTIME");
        break;
    case 1046:
        host.diagnostics.debugLog("RB_GETTEXTCOLOR");
        break;
    case 1046:
        host.diagnostics.debugLog("TB_DELETEBUTTON");
        break;
    case 1046:
        host.diagnostics.debugLog("TBM_GETPAGESIZE");
        break;
    case 1046:
        host.diagnostics.debugLog("TTM_GETTIPBKCOLOR");
        break;
    case 1047:
        host.diagnostics.debugLog("RB_SIZETORECT");
        break;
    case 1047:
        host.diagnostics.debugLog("TB_GETBUTTON");
        break;
    case 1047:
        host.diagnostics.debugLog("TBM_SETLINESIZE");
        break;
    case 1047:
        host.diagnostics.debugLog("TTM_GETTIPTEXTCOLOR");
        break;
    case 1048:
        host.diagnostics.debugLog("RB_BEGINDRAG");
        break;
    case 1048:
        host.diagnostics.debugLog("TB_BUTTONCOUNT");
        break;
    case 1048:
        host.diagnostics.debugLog("TBM_GETLINESIZE");
        break;
    case 1048:
        host.diagnostics.debugLog("TTM_SETMAXTIPWIDTH");
        break;
    case 1049:
        host.diagnostics.debugLog("RB_ENDDRAG");
        break;
    case 1049:
        host.diagnostics.debugLog("TB_COMMANDTOINDEX");
        break;
    case 1049:
        host.diagnostics.debugLog("TBM_GETTHUMBRECT");
        break;
    case 1049:
        host.diagnostics.debugLog("TTM_GETMAXTIPWIDTH");
        break;
    case 1050:
        host.diagnostics.debugLog("RB_DRAGMOVE");
        break;
    case 1050:
        host.diagnostics.debugLog("TBM_GETCHANNELRECT");
        break;
    case 1050:
        host.diagnostics.debugLog("TB_SAVERESTOREA");
        break;
    case 1050:
        host.diagnostics.debugLog("TTM_SETMARGIN");
        break;
    case 1051:
        host.diagnostics.debugLog("RB_GETBARHEIGHT");
        break;
    case 1051:
        host.diagnostics.debugLog("TB_CUSTOMIZE");
        break;
    case 1051:
        host.diagnostics.debugLog("TBM_SETTHUMBLENGTH");
        break;
    case 1051:
        host.diagnostics.debugLog("TTM_GETMARGIN");
        break;
    case 1052:
        host.diagnostics.debugLog("RB_GETBANDINFOW");
        break;
    case 1052:
        host.diagnostics.debugLog("TB_ADDSTRINGA");
        break;
    case 1052:
        host.diagnostics.debugLog("TBM_GETTHUMBLENGTH");
        break;
    case 1052:
        host.diagnostics.debugLog("TTM_POP");
        break;
    case 1053:
        host.diagnostics.debugLog("RB_GETBANDINFOA");
        break;
    case 1053:
        host.diagnostics.debugLog("TB_GETITEMRECT");
        break;
    case 1053:
        host.diagnostics.debugLog("TBM_SETTOOLTIPS");
        break;
    case 1053:
        host.diagnostics.debugLog("TTM_UPDATE");
        break;
    case 1054:
        host.diagnostics.debugLog("RB_MINIMIZEBAND");
        break;
    case 1054:
        host.diagnostics.debugLog("TB_BUTTONSTRUCTSIZE");
        break;
    case 1054:
        host.diagnostics.debugLog("TBM_GETTOOLTIPS");
        break;
    case 1054:
        host.diagnostics.debugLog("TTM_GETBUBBLESIZE");
        break;
    case 1055:
        host.diagnostics.debugLog("RB_MAXIMIZEBAND");
        break;
    case 1055:
        host.diagnostics.debugLog("TBM_SETTIPSIDE");
        break;
    case 1055:
        host.diagnostics.debugLog("TB_SETBUTTONSIZE");
        break;
    case 1055:
        host.diagnostics.debugLog("TTM_ADJUSTRECT");
        break;
    case 1056:
        host.diagnostics.debugLog("TBM_SETBUDDY");
        break;
    case 1056:
        host.diagnostics.debugLog("TB_SETBITMAPSIZE");
        break;
    case 1056:
        host.diagnostics.debugLog("TTM_SETTITLEA");
        break;
    case 1057:
        host.diagnostics.debugLog("MSG_FTS_JUMP_VA");
        break;
    case 1057:
        host.diagnostics.debugLog("TB_AUTOSIZE");
        break;
    case 1057:
        host.diagnostics.debugLog("TBM_GETBUDDY");
        break;
    case 1057:
        host.diagnostics.debugLog("TTM_SETTITLEW");
        break;
    case 1058:
        host.diagnostics.debugLog("RB_GETBANDBORDERS");
        break;
    case 1059:
        host.diagnostics.debugLog("MSG_FTS_JUMP_QWORD");
        break;
    case 1059:
        host.diagnostics.debugLog("RB_SHOWBAND");
        break;
    case 1059:
        host.diagnostics.debugLog("TB_GETTOOLTIPS");
        break;
    case 1060:
        host.diagnostics.debugLog("MSG_REINDEX_REQUEST");
        break;
    case 1060:
        host.diagnostics.debugLog("TB_SETTOOLTIPS");
        break;
    case 1061:
        host.diagnostics.debugLog("MSG_FTS_WHERE_IS_IT");
        break;
    case 1061:
        host.diagnostics.debugLog("RB_SETPALETTE");
        break;
    case 1061:
        host.diagnostics.debugLog("TB_SETPARENT");
        break;
    case 1062:
        host.diagnostics.debugLog("RB_GETPALETTE");
        break;
    case 1063:
        host.diagnostics.debugLog("RB_MOVEBAND");
        break;
    case 1063:
        host.diagnostics.debugLog("TB_SETROWS");
        break;
    case 1064:
        host.diagnostics.debugLog("TB_GETROWS");
        break;
    case 1065:
        host.diagnostics.debugLog("TB_GETBITMAPFLAGS");
        break;
    case 1066:
        host.diagnostics.debugLog("TB_SETCMDID");
        break;
    case 1067:
        host.diagnostics.debugLog("RB_PUSHCHEVRON");
        break;
    case 1067:
        host.diagnostics.debugLog("TB_CHANGEBITMAP");
        break;
    case 1068:
        host.diagnostics.debugLog("TB_GETBITMAP");
        break;
    case 1069:
        host.diagnostics.debugLog("MSG_GET_DEFFONT");
        break;
    case 1069:
        host.diagnostics.debugLog("TB_GETBUTTONTEXTA");
        break;
    case 1070:
        host.diagnostics.debugLog("TB_REPLACEBITMAP");
        break;
    case 1071:
        host.diagnostics.debugLog("TB_SETINDENT");
        break;
    case 1072:
        host.diagnostics.debugLog("TB_SETIMAGELIST");
        break;
    case 1073:
        host.diagnostics.debugLog("TB_GETIMAGELIST");
        break;
    case 1074:
        host.diagnostics.debugLog("TB_LOADIMAGES");
        break;
    case 1074:
        host.diagnostics.debugLog("EM_CANPASTE");
        break;
    case 1074:
        host.diagnostics.debugLog("TTM_ADDTOOLW");
        break;
    case 1075:
        host.diagnostics.debugLog("EM_DISPLAYBAND");
        break;
    case 1075:
        host.diagnostics.debugLog("TB_GETRECT");
        break;
    case 1075:
        host.diagnostics.debugLog("TTM_DELTOOLW");
        break;
    case 1076:
        host.diagnostics.debugLog("EM_EXGETSEL");
        break;
    case 1076:
        host.diagnostics.debugLog("TB_SETHOTIMAGELIST");
        break;
    case 1076:
        host.diagnostics.debugLog("TTM_NEWTOOLRECTW");
        break;
    case 1077:
        host.diagnostics.debugLog("EM_EXLIMITTEXT");
        break;
    case 1077:
        host.diagnostics.debugLog("TB_GETHOTIMAGELIST");
        break;
    case 1077:
        host.diagnostics.debugLog("TTM_GETTOOLINFOW");
        break;
    case 1078:
        host.diagnostics.debugLog("EM_EXLINEFROMCHAR");
        break;
    case 1078:
        host.diagnostics.debugLog("TB_SETDISABLEDIMAGELIST");
        break;
    case 1078:
        host.diagnostics.debugLog("TTM_SETTOOLINFOW");
        break;
    case 1079:
        host.diagnostics.debugLog("EM_EXSETSEL");
        break;
    case 1079:
        host.diagnostics.debugLog("TB_GETDISABLEDIMAGELIST");
        break;
    case 1079:
        host.diagnostics.debugLog("TTM_HITTESTW");
        break;
    case 1080:
        host.diagnostics.debugLog("EM_FINDTEXT");
        break;
    case 1080:
        host.diagnostics.debugLog("TB_SETSTYLE");
        break;
    case 1080:
        host.diagnostics.debugLog("TTM_GETTEXTW");
        break;
    case 1081:
        host.diagnostics.debugLog("EM_FORMATRANGE");
        break;
    case 1081:
        host.diagnostics.debugLog("TB_GETSTYLE");
        break;
    case 1081:
        host.diagnostics.debugLog("TTM_UPDATETIPTEXTW");
        break;
    case 1082:
        host.diagnostics.debugLog("EM_GETCHARFORMAT");
        break;
    case 1082:
        host.diagnostics.debugLog("TB_GETBUTTONSIZE");
        break;
    case 1082:
        host.diagnostics.debugLog("TTM_ENUMTOOLSW");
        break;
    case 1083:
        host.diagnostics.debugLog("EM_GETEVENTMASK");
        break;
    case 1083:
        host.diagnostics.debugLog("TB_SETBUTTONWIDTH");
        break;
    case 1083:
        host.diagnostics.debugLog("TTM_GETCURRENTTOOLW");
        break;
    case 1084:
        host.diagnostics.debugLog("EM_GETOLEINTERFACE");
        break;
    case 1084:
        host.diagnostics.debugLog("TB_SETMAXTEXTROWS");
        break;
    case 1085:
        host.diagnostics.debugLog("EM_GETPARAFORMAT");
        break;
    case 1085:
        host.diagnostics.debugLog("TB_GETTEXTROWS");
        break;
    case 1086:
        host.diagnostics.debugLog("EM_GETSELTEXT");
        break;
    case 1086:
        host.diagnostics.debugLog("TB_GETOBJECT");
        break;
    case 1087:
        host.diagnostics.debugLog("EM_HIDESELECTION");
        break;
    case 1087:
        host.diagnostics.debugLog("TB_GETBUTTONINFOW");
        break;
    case 1088:
        host.diagnostics.debugLog("EM_PASTESPECIAL");
        break;
    case 1088:
        host.diagnostics.debugLog("TB_SETBUTTONINFOW");
        break;
    case 1089:
        host.diagnostics.debugLog("EM_REQUESTRESIZE");
        break;
    case 1089:
        host.diagnostics.debugLog("TB_GETBUTTONINFOA");
        break;
    case 1090:
        host.diagnostics.debugLog("EM_SELECTIONTYPE");
        break;
    case 1090:
        host.diagnostics.debugLog("TB_SETBUTTONINFOA");
        break;
    case 1091:
        host.diagnostics.debugLog("EM_SETBKGNDCOLOR");
        break;
    case 1091:
        host.diagnostics.debugLog("TB_INSERTBUTTONW");
        break;
    case 1092:
        host.diagnostics.debugLog("EM_SETCHARFORMAT");
        break;
    case 1092:
        host.diagnostics.debugLog("TB_ADDBUTTONSW");
        break;
    case 1093:
        host.diagnostics.debugLog("EM_SETEVENTMASK");
        break;
    case 1093:
        host.diagnostics.debugLog("TB_HITTEST");
        break;
    case 1094:
        host.diagnostics.debugLog("EM_SETOLECALLBACK");
        break;
    case 1094:
        host.diagnostics.debugLog("TB_SETDRAWTEXTFLAGS");
        break;
    case 1095:
        host.diagnostics.debugLog("EM_SETPARAFORMAT");
        break;
    case 1095:
        host.diagnostics.debugLog("TB_GETHOTITEM");
        break;
    case 1096:
        host.diagnostics.debugLog("EM_SETTARGETDEVICE");
        break;
    case 1096:
        host.diagnostics.debugLog("TB_SETHOTITEM");
        break;
    case 1097:
        host.diagnostics.debugLog("EM_STREAMIN");
        break;
    case 1097:
        host.diagnostics.debugLog("TB_SETANCHORHIGHLIGHT");
        break;
    case 1098:
        host.diagnostics.debugLog("EM_STREAMOUT");
        break;
    case 1098:
        host.diagnostics.debugLog("TB_GETANCHORHIGHLIGHT");
        break;
    case 1099:
        host.diagnostics.debugLog("EM_GETTEXTRANGE");
        break;
    case 1099:
        host.diagnostics.debugLog("TB_GETBUTTONTEXTW");
        break;
    case 1100:
        host.diagnostics.debugLog("EM_FINDWORDBREAK");
        break;
    case 1100:
        host.diagnostics.debugLog("TB_SAVERESTOREW");
        break;
    case 1101:
        host.diagnostics.debugLog("EM_SETOPTIONS");
        break;
    case 1101:
        host.diagnostics.debugLog("TB_ADDSTRINGW");
        break;
    case 1102:
        host.diagnostics.debugLog("EM_GETOPTIONS");
        break;
    case 1102:
        host.diagnostics.debugLog("TB_MAPACCELERATORA");
        break;
    case 1103:
        host.diagnostics.debugLog("EM_FINDTEXTEX");
        break;
    case 1103:
        host.diagnostics.debugLog("TB_GETINSERTMARK");
        break;
    case 1104:
        host.diagnostics.debugLog("EM_GETWORDBREAKPROCEX");
        break;
    case 1104:
        host.diagnostics.debugLog("TB_SETINSERTMARK");
        break;
    case 1105:
        host.diagnostics.debugLog("EM_SETWORDBREAKPROCEX");
        break;
    case 1105:
        host.diagnostics.debugLog("TB_INSERTMARKHITTEST");
        break;
    case 1106:
        host.diagnostics.debugLog("EM_SETUNDOLIMIT");
        break;
    case 1106:
        host.diagnostics.debugLog("TB_MOVEBUTTON");
        break;
    case 1107:
        host.diagnostics.debugLog("TB_GETMAXSIZE");
        break;
    case 1108:
        host.diagnostics.debugLog("EM_REDO");
        break;
    case 1108:
        host.diagnostics.debugLog("TB_SETEXTENDEDSTYLE");
        break;
    case 1109:
        host.diagnostics.debugLog("EM_CANREDO");
        break;
    case 1109:
        host.diagnostics.debugLog("TB_GETEXTENDEDSTYLE");
        break;
    case 1110:
        host.diagnostics.debugLog("EM_GETUNDONAME");
        break;
    case 1110:
        host.diagnostics.debugLog("TB_GETPADDING");
        break;
    case 1111:
        host.diagnostics.debugLog("EM_GETREDONAME");
        break;
    case 1111:
        host.diagnostics.debugLog("TB_SETPADDING");
        break;
    case 1112:
        host.diagnostics.debugLog("EM_STOPGROUPTYPING");
        break;
    case 1112:
        host.diagnostics.debugLog("TB_SETINSERTMARKCOLOR");
        break;
    case 1113:
        host.diagnostics.debugLog("EM_SETTEXTMODE");
        break;
    case 1113:
        host.diagnostics.debugLog("TB_GETINSERTMARKCOLOR");
        break;
    case 1114:
        host.diagnostics.debugLog("EM_GETTEXTMODE");
        break;
    case 1114:
        host.diagnostics.debugLog("TB_MAPACCELERATORW");
        break;
    case 1115:
        host.diagnostics.debugLog("EM_AUTOURLDETECT");
        break;
    case 1115:
        host.diagnostics.debugLog("TB_GETSTRINGW");
        break;
    case 1116:
        host.diagnostics.debugLog("EM_GETAUTOURLDETECT");
        break;
    case 1116:
        host.diagnostics.debugLog("TB_GETSTRINGA");
        break;
    case 1117:
        host.diagnostics.debugLog("EM_SETPALETTE");
        break;
    case 1118:
        host.diagnostics.debugLog("EM_GETTEXTEX");
        break;
    case 1119:
        host.diagnostics.debugLog("EM_GETTEXTLENGTHEX");
        break;
    case 1120:
        host.diagnostics.debugLog("EM_SHOWSCROLLBAR");
        break;
    case 1121:
        host.diagnostics.debugLog("EM_SETTEXTEX");
        break;
    case 1123:
        host.diagnostics.debugLog("TAPI_REPLY");
        break;
    case 1124:
        host.diagnostics.debugLog("ACM_OPENA");
        break;
    case 1124:
        host.diagnostics.debugLog("BFFM_SETSTATUSTEXTA");
        break;
    case 1124:
        host.diagnostics.debugLog("CDM_FIRST");
        break;
    case 1124:
        host.diagnostics.debugLog("CDM_GETSPEC");
        break;
    case 1124:
        host.diagnostics.debugLog("EM_SETPUNCTUATION");
        break;
    case 1124:
        host.diagnostics.debugLog("IPM_CLEARADDRESS");
        break;
    case 1124:
        host.diagnostics.debugLog("WM_CAP_UNICODE_START");
        break;
    case 1125:
        host.diagnostics.debugLog("ACM_PLAY");
        break;
    case 1125:
        host.diagnostics.debugLog("BFFM_ENABLEOK");
        break;
    case 1125:
        host.diagnostics.debugLog("CDM_GETFILEPATH");
        break;
    case 1125:
        host.diagnostics.debugLog("EM_GETPUNCTUATION");
        break;
    case 1125:
        host.diagnostics.debugLog("IPM_SETADDRESS");
        break;
    case 1125:
        host.diagnostics.debugLog("PSM_SETCURSEL");
        break;
    case 1125:
        host.diagnostics.debugLog("UDM_SETRANGE");
        break;
    case 1125:
        host.diagnostics.debugLog("WM_CHOOSEFONT_SETLOGFONT");
        break;
    case 1126:
        host.diagnostics.debugLog("ACM_STOP");
        break;
    case 1126:
        host.diagnostics.debugLog("BFFM_SETSELECTIONA");
        break;
    case 1126:
        host.diagnostics.debugLog("CDM_GETFOLDERPATH");
        break;
    case 1126:
        host.diagnostics.debugLog("EM_SETWORDWRAPMODE");
        break;
    case 1126:
        host.diagnostics.debugLog("IPM_GETADDRESS");
        break;
    case 1126:
        host.diagnostics.debugLog("PSM_REMOVEPAGE");
        break;
    case 1126:
        host.diagnostics.debugLog("UDM_GETRANGE");
        break;
    case 1126:
        host.diagnostics.debugLog("WM_CAP_SET_CALLBACK_ERRORW");
        break;
    case 1126:
        host.diagnostics.debugLog("WM_CHOOSEFONT_SETFLAGS");
        break;
    case 1127:
        host.diagnostics.debugLog("ACM_OPENW");
        break;
    case 1127:
        host.diagnostics.debugLog("BFFM_SETSELECTIONW");
        break;
    case 1127:
        host.diagnostics.debugLog("CDM_GETFOLDERIDLIST");
        break;
    case 1127:
        host.diagnostics.debugLog("EM_GETWORDWRAPMODE");
        break;
    case 1127:
        host.diagnostics.debugLog("IPM_SETRANGE");
        break;
    case 1127:
        host.diagnostics.debugLog("PSM_ADDPAGE");
        break;
    case 1127:
        host.diagnostics.debugLog("UDM_SETPOS");
        break;
    case 1127:
        host.diagnostics.debugLog("WM_CAP_SET_CALLBACK_STATUSW");
        break;
    case 1128:
        host.diagnostics.debugLog("BFFM_SETSTATUSTEXTW");
        break;
    case 1128:
        host.diagnostics.debugLog("CDM_SETCONTROLTEXT");
        break;
    case 1128:
        host.diagnostics.debugLog("EM_SETIMECOLOR");
        break;
    case 1128:
        host.diagnostics.debugLog("IPM_SETFOCUS");
        break;
    case 1128:
        host.diagnostics.debugLog("PSM_CHANGED");
        break;
    case 1128:
        host.diagnostics.debugLog("UDM_GETPOS");
        break;
    case 1129:
        host.diagnostics.debugLog("CDM_HIDECONTROL");
        break;
    case 1129:
        host.diagnostics.debugLog("EM_GETIMECOLOR");
        break;
    case 1129:
        host.diagnostics.debugLog("IPM_ISBLANK");
        break;
    case 1129:
        host.diagnostics.debugLog("PSM_RESTARTWINDOWS");
        break;
    case 1129:
        host.diagnostics.debugLog("UDM_SETBUDDY");
        break;
    case 1130:
        host.diagnostics.debugLog("CDM_SETDEFEXT");
        break;
    case 1130:
        host.diagnostics.debugLog("EM_SETIMEOPTIONS");
        break;
    case 1130:
        host.diagnostics.debugLog("PSM_REBOOTSYSTEM");
        break;
    case 1130:
        host.diagnostics.debugLog("UDM_GETBUDDY");
        break;
    case 1131:
        host.diagnostics.debugLog("EM_GETIMEOPTIONS");
        break;
    case 1131:
        host.diagnostics.debugLog("PSM_CANCELTOCLOSE");
        break;
    case 1131:
        host.diagnostics.debugLog("UDM_SETACCEL");
        break;
    case 1132:
        host.diagnostics.debugLog("EM_CONVPOSITION");
        break;
    case 1132:
        host.diagnostics.debugLog("EM_CONVPOSITION");
        break;
    case 1132:
        host.diagnostics.debugLog("PSM_QUERYSIBLINGS");
        break;
    case 1132:
        host.diagnostics.debugLog("UDM_GETACCEL");
        break;
    case 1133:
        host.diagnostics.debugLog("MCIWNDM_GETZOOM");
        break;
    case 1133:
        host.diagnostics.debugLog("PSM_UNCHANGED");
        break;
    case 1133:
        host.diagnostics.debugLog("UDM_SETBASE");
        break;
    case 1134:
        host.diagnostics.debugLog("PSM_APPLY");
        break;
    case 1134:
        host.diagnostics.debugLog("UDM_GETBASE");
        break;
    case 1135:
        host.diagnostics.debugLog("PSM_SETTITLEA");
        break;
    case 1135:
        host.diagnostics.debugLog("UDM_SETRANGE32");
        break;
    case 1136:
        host.diagnostics.debugLog("PSM_SETWIZBUTTONS");
        break;
    case 1136:
        host.diagnostics.debugLog("UDM_GETRANGE32");
        break;
    case 1136:
        host.diagnostics.debugLog("WM_CAP_DRIVER_GET_NAMEW");
        break;
    case 1137:
        host.diagnostics.debugLog("PSM_PRESSBUTTON");
        break;
    case 1137:
        host.diagnostics.debugLog("UDM_SETPOS32");
        break;
    case 1137:
        host.diagnostics.debugLog("WM_CAP_DRIVER_GET_VERSIONW");
        break;
    case 1138:
        host.diagnostics.debugLog("PSM_SETCURSELID");
        break;
    case 1138:
        host.diagnostics.debugLog("UDM_GETPOS32");
        break;
    case 1139:
        host.diagnostics.debugLog("PSM_SETFINISHTEXTA");
        break;
    case 1140:
        host.diagnostics.debugLog("PSM_GETTABCONTROL");
        break;
    case 1141:
        host.diagnostics.debugLog("PSM_ISDIALOGMESSAGE");
        break;
    case 1142:
        host.diagnostics.debugLog("MCIWNDM_REALIZE");
        break;
    case 1142:
        host.diagnostics.debugLog("PSM_GETCURRENTPAGEHWND");
        break;
    case 1143:
        host.diagnostics.debugLog("MCIWNDM_SETTIMEFORMATA");
        break;
    case 1143:
        host.diagnostics.debugLog("PSM_INSERTPAGE");
        break;
    case 1144:
        host.diagnostics.debugLog("EM_SETLANGOPTIONS");
        break;
    case 1144:
        host.diagnostics.debugLog("MCIWNDM_GETTIMEFORMATA");
        break;
    case 1144:
        host.diagnostics.debugLog("PSM_SETTITLEW");
        break;
    case 1144:
        host.diagnostics.debugLog("WM_CAP_FILE_SET_CAPTURE_FILEW");
        break;
    case 1145:
        host.diagnostics.debugLog("EM_GETLANGOPTIONS");
        break;
    case 1145:
        host.diagnostics.debugLog("MCIWNDM_VALIDATEMEDIA");
        break;
    case 1145:
        host.diagnostics.debugLog("PSM_SETFINISHTEXTW");
        break;
    case 1145:
        host.diagnostics.debugLog("WM_CAP_FILE_GET_CAPTURE_FILEW");
        break;
    case 1146:
        host.diagnostics.debugLog("EM_GETIMECOMPMODE");
        break;
    case 1147:
        host.diagnostics.debugLog("EM_FINDTEXTW");
        break;
    case 1147:
        host.diagnostics.debugLog("MCIWNDM_PLAYTO");
        break;
    case 1147:
        host.diagnostics.debugLog("WM_CAP_FILE_SAVEASW");
        break;
    case 1148:
        host.diagnostics.debugLog("EM_FINDTEXTEXW");
        break;
    case 1148:
        host.diagnostics.debugLog("MCIWNDM_GETFILENAMEA");
        break;
    case 1149:
        host.diagnostics.debugLog("EM_RECONVERSION");
        break;
    case 1149:
        host.diagnostics.debugLog("MCIWNDM_GETDEVICEA");
        break;
    case 1149:
        host.diagnostics.debugLog("PSM_SETHEADERTITLEA");
        break;
    case 1149:
        host.diagnostics.debugLog("WM_CAP_FILE_SAVEDIBW");
        break;
    case 1150:
        host.diagnostics.debugLog("EM_SETIMEMODEBIAS");
        break;
    case 1150:
        host.diagnostics.debugLog("MCIWNDM_GETPALETTE");
        break;
    case 1150:
        host.diagnostics.debugLog("PSM_SETHEADERTITLEW");
        break;
    case 1151:
        host.diagnostics.debugLog("EM_GETIMEMODEBIAS");
        break;
    case 1151:
        host.diagnostics.debugLog("MCIWNDM_SETPALETTE");
        break;
    case 1151:
        host.diagnostics.debugLog("PSM_SETHEADERSUBTITLEA");
        break;
    case 1152:
        host.diagnostics.debugLog("MCIWNDM_GETERRORA");
        break;
    case 1152:
        host.diagnostics.debugLog("PSM_SETHEADERSUBTITLEW");
        break;
    case 1153:
        host.diagnostics.debugLog("PSM_HWNDTOINDEX");
        break;
    case 1154:
        host.diagnostics.debugLog("PSM_INDEXTOHWND");
        break;
    case 1155:
        host.diagnostics.debugLog("MCIWNDM_SETINACTIVETIMER");
        break;
    case 1155:
        host.diagnostics.debugLog("PSM_PAGETOINDEX");
        break;
    case 1156:
        host.diagnostics.debugLog("PSM_INDEXTOPAGE");
        break;
    case 1157:
        host.diagnostics.debugLog("DL_BEGINDRAG");
        break;
    case 1157:
        host.diagnostics.debugLog("MCIWNDM_GETINACTIVETIMER");
        break;
    case 1157:
        host.diagnostics.debugLog("PSM_IDTOINDEX");
        break;
    case 1158:
        host.diagnostics.debugLog("DL_DRAGGING");
        break;
    case 1158:
        host.diagnostics.debugLog("PSM_INDEXTOID");
        break;
    case 1159:
        host.diagnostics.debugLog("DL_DROPPED");
        break;
    case 1159:
        host.diagnostics.debugLog("PSM_GETRESULT");
        break;
    case 1160:
        host.diagnostics.debugLog("DL_CANCELDRAG");
        break;
    case 1160:
        host.diagnostics.debugLog("PSM_RECALCPAGESIZES");
        break;
    case 1164:
        host.diagnostics.debugLog("MCIWNDM_GET_SOURCE");
        break;
    case 1165:
        host.diagnostics.debugLog("MCIWNDM_PUT_SOURCE");
        break;
    case 1166:
        host.diagnostics.debugLog("MCIWNDM_GET_DEST");
        break;
    case 1167:
        host.diagnostics.debugLog("MCIWNDM_PUT_DEST");
        break;
    case 1168:
        host.diagnostics.debugLog("MCIWNDM_CAN_PLAY");
        break;
    case 1169:
        host.diagnostics.debugLog("MCIWNDM_CAN_WINDOW");
        break;
    case 1170:
        host.diagnostics.debugLog("MCIWNDM_CAN_RECORD");
        break;
    case 1171:
        host.diagnostics.debugLog("MCIWNDM_CAN_SAVE");
        break;
    case 1172:
        host.diagnostics.debugLog("MCIWNDM_CAN_EJECT");
        break;
    case 1173:
        host.diagnostics.debugLog("MCIWNDM_CAN_CONFIG");
        break;
    case 1174:
        host.diagnostics.debugLog("IE_GETINK");
        break;
    case 1174:
        host.diagnostics.debugLog("IE_MSGFIRST");
        break;
    case 1174:
        host.diagnostics.debugLog("MCIWNDM_PALETTEKICK");
        break;
    case 1175:
        host.diagnostics.debugLog("IE_SETINK");
        break;
    case 1176:
        host.diagnostics.debugLog("IE_GETPENTIP");
        break;
    case 1177:
        host.diagnostics.debugLog("IE_SETPENTIP");
        break;
    case 1178:
        host.diagnostics.debugLog("IE_GETERASERTIP");
        break;
    case 1179:
        host.diagnostics.debugLog("IE_SETERASERTIP");
        break;
    case 1180:
        host.diagnostics.debugLog("IE_GETBKGND");
        break;
    case 1181:
        host.diagnostics.debugLog("IE_SETBKGND");
        break;
    case 1182:
        host.diagnostics.debugLog("IE_GETGRIDORIGIN");
        break;
    case 1183:
        host.diagnostics.debugLog("IE_SETGRIDORIGIN");
        break;
    case 1184:
        host.diagnostics.debugLog("IE_GETGRIDPEN");
        break;
    case 1185:
        host.diagnostics.debugLog("IE_SETGRIDPEN");
        break;
    case 1186:
        host.diagnostics.debugLog("IE_GETGRIDSIZE");
        break;
    case 1187:
        host.diagnostics.debugLog("IE_SETGRIDSIZE");
        break;
    case 1188:
        host.diagnostics.debugLog("IE_GETMODE");
        break;
    case 1189:
        host.diagnostics.debugLog("IE_SETMODE");
        break;
    case 1190:
        host.diagnostics.debugLog("IE_GETINKRECT");
        break;
    case 1190:
        host.diagnostics.debugLog("WM_CAP_SET_MCI_DEVICEW");
        break;
    case 1191:
        host.diagnostics.debugLog("WM_CAP_GET_MCI_DEVICEW");
        break;
    case 1204:
        host.diagnostics.debugLog("WM_CAP_PAL_OPENW");
        break;
    case 1205:
        host.diagnostics.debugLog("WM_CAP_PAL_SAVEW");
        break;
    case 1208:
        host.diagnostics.debugLog("IE_GETAPPDATA");
        break;
    case 1209:
        host.diagnostics.debugLog("IE_SETAPPDATA");
        break;
    case 1210:
        host.diagnostics.debugLog("IE_GETDRAWOPTS");
        break;
    case 1211:
        host.diagnostics.debugLog("IE_SETDRAWOPTS");
        break;
    case 1212:
        host.diagnostics.debugLog("IE_GETFORMAT");
        break;
    case 1213:
        host.diagnostics.debugLog("IE_SETFORMAT");
        break;
    case 1214:
        host.diagnostics.debugLog("IE_GETINKINPUT");
        break;
    case 1215:
        host.diagnostics.debugLog("IE_SETINKINPUT");
        break;
    case 1216:
        host.diagnostics.debugLog("IE_GETNOTIFY");
        break;
    case 1217:
        host.diagnostics.debugLog("IE_SETNOTIFY");
        break;
    case 1218:
        host.diagnostics.debugLog("IE_GETRECOG");
        break;
    case 1219:
        host.diagnostics.debugLog("IE_SETRECOG");
        break;
    case 1220:
        host.diagnostics.debugLog("IE_GETSECURITY");
        break;
    case 1221:
        host.diagnostics.debugLog("IE_SETSECURITY");
        break;
    case 1222:
        host.diagnostics.debugLog("IE_GETSEL");
        break;
    case 1223:
        host.diagnostics.debugLog("IE_SETSEL");
        break;
    case 1224:
        host.diagnostics.debugLog("CDM_LAST");
        break;
    case 1224:
        host.diagnostics.debugLog("EM_SETBIDIOPTIONS");
        break;
    case 1224:
        host.diagnostics.debugLog("IE_DOCOMMAND");
        break;
    case 1224:
        host.diagnostics.debugLog("MCIWNDM_NOTIFYMODE");
        break;
    case 1225:
        host.diagnostics.debugLog("EM_GETBIDIOPTIONS");
        break;
    case 1225:
        host.diagnostics.debugLog("IE_GETCOMMAND");
        break;
    case 1226:
        host.diagnostics.debugLog("EM_SETTYPOGRAPHYOPTIONS");
        break;
    case 1226:
        host.diagnostics.debugLog("IE_GETCOUNT");
        break;
    case 1227:
        host.diagnostics.debugLog("EM_GETTYPOGRAPHYOPTIONS");
        break;
    case 1227:
        host.diagnostics.debugLog("IE_GETGESTURE");
        break;
    case 1227:
        host.diagnostics.debugLog("MCIWNDM_NOTIFYMEDIA");
        break;
    case 1228:
        host.diagnostics.debugLog("EM_SETEDITSTYLE");
        break;
    case 1228:
        host.diagnostics.debugLog("IE_GETMENU");
        break;
    case 1229:
        host.diagnostics.debugLog("EM_GETEDITSTYLE");
        break;
    case 1229:
        host.diagnostics.debugLog("IE_GETPAINTDC");
        break;
    case 1229:
        host.diagnostics.debugLog("MCIWNDM_NOTIFYERROR");
        break;
    case 1230:
        host.diagnostics.debugLog("IE_GETPDEVENT");
        break;
    case 1231:
        host.diagnostics.debugLog("IE_GETSELCOUNT");
        break;
    case 1232:
        host.diagnostics.debugLog("IE_GETSELITEMS");
        break;
    case 1233:
        host.diagnostics.debugLog("IE_GETSTYLE");
        break;
    case 1243:
        host.diagnostics.debugLog("MCIWNDM_SETTIMEFORMATW");
        break;
    case 1244:
        host.diagnostics.debugLog("EM_OUTLINE");
        break;
    case 1244:
        host.diagnostics.debugLog("MCIWNDM_GETTIMEFORMATW");
        break;
    case 1245:
        host.diagnostics.debugLog("EM_GETSCROLLPOS");
        break;
    case 1246:
        host.diagnostics.debugLog("EM_SETSCROLLPOS");
        break;
    case 1246:
        host.diagnostics.debugLog("EM_SETSCROLLPOS");
        break;
    case 1247:
        host.diagnostics.debugLog("EM_SETFONTSIZE");
        break;
    case 1248:
        host.diagnostics.debugLog("EM_GETZOOM");
        break;
    case 1248:
        host.diagnostics.debugLog("MCIWNDM_GETFILENAMEW");
        break;
    case 1249:
        host.diagnostics.debugLog("EM_SETZOOM");
        break;
    case 1249:
        host.diagnostics.debugLog("MCIWNDM_GETDEVICEW");
        break;
    case 1250:
        host.diagnostics.debugLog("EM_GETVIEWKIND");
        break;
    case 1251:
        host.diagnostics.debugLog("EM_SETVIEWKIND");
        break;
    case 1252:
        host.diagnostics.debugLog("EM_GETPAGE");
        break;
    case 1252:
        host.diagnostics.debugLog("MCIWNDM_GETERRORW");
        break;
    case 1253:
        host.diagnostics.debugLog("EM_SETPAGE");
        break;
    case 1254:
        host.diagnostics.debugLog("EM_GETHYPHENATEINFO");
        break;
    case 1255:
        host.diagnostics.debugLog("EM_SETHYPHENATEINFO");
        break;
    case 1259:
        host.diagnostics.debugLog("EM_GETPAGEROTATE");
        break;
    case 1260:
        host.diagnostics.debugLog("EM_SETPAGEROTATE");
        break;
    case 1261:
        host.diagnostics.debugLog("EM_GETCTFMODEBIAS");
        break;
    case 1262:
        host.diagnostics.debugLog("EM_SETCTFMODEBIAS");
        break;
    case 1264:
        host.diagnostics.debugLog("EM_GETCTFOPENSTATUS");
        break;
    case 1265:
        host.diagnostics.debugLog("EM_SETCTFOPENSTATUS");
        break;
    case 1266:
        host.diagnostics.debugLog("EM_GETIMECOMPTEXT");
        break;
    case 1267:
        host.diagnostics.debugLog("EM_ISIME");
        break;
    case 1268:
        host.diagnostics.debugLog("EM_GETIMEPROPERTY");
        break;
    case 1293:
        host.diagnostics.debugLog("EM_GETQUERYRTFOBJ");
        break;
    case 1294:
        host.diagnostics.debugLog("EM_SETQUERYRTFOBJ");
        break;
    case 1536:
        host.diagnostics.debugLog("FM_GETFOCUS");
        break;
    case 1537:
        host.diagnostics.debugLog("FM_GETDRIVEINFOA");
        break;
    case 1538:
        host.diagnostics.debugLog("FM_GETSELCOUNT");
        break;
    case 1539:
        host.diagnostics.debugLog("FM_GETSELCOUNTLFN");
        break;
    case 1540:
        host.diagnostics.debugLog("FM_GETFILESELA");
        break;
    case 1541:
        host.diagnostics.debugLog("FM_GETFILESELLFNA");
        break;
    case 1542:
        host.diagnostics.debugLog("FM_REFRESH_WINDOWS");
        break;
    case 1543:
        host.diagnostics.debugLog("FM_RELOAD_EXTENSIONS");
        break;
    case 1553:
        host.diagnostics.debugLog("FM_GETDRIVEINFOW");
        break;
    case 1556:
        host.diagnostics.debugLog("FM_GETFILESELW");
        break;
    case 1557:
        host.diagnostics.debugLog("FM_GETFILESELLFNW");
        break;
    case 1625:
        host.diagnostics.debugLog("WLX_WM_SAS");
        break;
    case 2024:
        host.diagnostics.debugLog("SM_GETSELCOUNT");
        break;
    case 2024:
        host.diagnostics.debugLog("UM_GETSELCOUNT");
        break;
    case 2024:
        host.diagnostics.debugLog("WM_CPL_LAUNCH");
        break;
    case 2025:
        host.diagnostics.debugLog("SM_GETSERVERSELA");
        break;
    case 2025:
        host.diagnostics.debugLog("UM_GETUSERSELA");
        break;
    case 2025:
        host.diagnostics.debugLog("WM_CPL_LAUNCHED");
        break;
    case 2026:
        host.diagnostics.debugLog("SM_GETSERVERSELW");
        break;
    case 2026:
        host.diagnostics.debugLog("UM_GETUSERSELW");
        break;
    case 2027:
        host.diagnostics.debugLog("SM_GETCURFOCUSA");
        break;
    case 2027:
        host.diagnostics.debugLog("UM_GETGROUPSELA");
        break;
    case 2028:
        host.diagnostics.debugLog("SM_GETCURFOCUSW");
        break;
    case 2028:
        host.diagnostics.debugLog("UM_GETGROUPSELW");
        break;
    case 2029:
        host.diagnostics.debugLog("SM_GETOPTIONS");
        break;
    case 2029:
        host.diagnostics.debugLog("UM_GETCURFOCUSA");
        break;
    case 2030:
        host.diagnostics.debugLog("UM_GETCURFOCUSW");
        break;
    case 2031:
        host.diagnostics.debugLog("UM_GETOPTIONS");
        break;
    case 2032:
        host.diagnostics.debugLog("UM_GETOPTIONS2");
        break;
    case 4096:
        host.diagnostics.debugLog("LVM_FIRST");
        break;
    case 4096:
        host.diagnostics.debugLog("LVM_GETBKCOLOR");
        break;
    case 4097:
        host.diagnostics.debugLog("LVM_SETBKCOLOR");
        break;
    case 4098:
        host.diagnostics.debugLog("LVM_GETIMAGELIST");
        break;
    case 4099:
        host.diagnostics.debugLog("LVM_SETIMAGELIST");
        break;
    case 4100:
        host.diagnostics.debugLog("LVM_GETITEMCOUNT");
        break;
    case 4101:
        host.diagnostics.debugLog("LVM_GETITEMA");
        break;
    case 4102:
        host.diagnostics.debugLog("LVM_SETITEMA");
        break;
    case 4103:
        host.diagnostics.debugLog("LVM_INSERTITEMA");
        break;
    case 4104:
        host.diagnostics.debugLog("LVM_DELETEITEM");
        break;
    case 4105:
        host.diagnostics.debugLog("LVM_DELETEALLITEMS");
        break;
    case 4106:
        host.diagnostics.debugLog("LVM_GETCALLBACKMASK");
        break;
    case 4107:
        host.diagnostics.debugLog("LVM_SETCALLBACKMASK");
        break;
    case 4108:
        host.diagnostics.debugLog("LVM_GETNEXTITEM");
        break;
    case 4109:
        host.diagnostics.debugLog("LVM_FINDITEMA");
        break;
    case 4110:
        host.diagnostics.debugLog("LVM_GETITEMRECT");
        break;
    case 4111:
        host.diagnostics.debugLog("LVM_SETITEMPOSITION");
        break;
    case 4112:
        host.diagnostics.debugLog("LVM_GETITEMPOSITION");
        break;
    case 4113:
        host.diagnostics.debugLog("LVM_GETSTRINGWIDTHA");
        break;
    case 4114:
        host.diagnostics.debugLog("LVM_HITTEST");
        break;
    case 4115:
        host.diagnostics.debugLog("LVM_ENSUREVISIBLE");
        break;
    case 4116:
        host.diagnostics.debugLog("LVM_SCROLL");
        break;
    case 4117:
        host.diagnostics.debugLog("LVM_REDRAWITEMS");
        break;
    case 4118:
        host.diagnostics.debugLog("LVM_ARRANGE");
        break;
    case 4119:
        host.diagnostics.debugLog("LVM_EDITLABELA");
        break;
    case 4120:
        host.diagnostics.debugLog("LVM_GETEDITCONTROL");
        break;
    case 4121:
        host.diagnostics.debugLog("LVM_GETCOLUMNA");
        break;
    case 4122:
        host.diagnostics.debugLog("LVM_SETCOLUMNA");
        break;
    case 4123:
        host.diagnostics.debugLog("LVM_INSERTCOLUMNA");
        break;
    case 4124:
        host.diagnostics.debugLog("LVM_DELETECOLUMN");
        break;
    case 4125:
        host.diagnostics.debugLog("LVM_GETCOLUMNWIDTH");
        break;
    case 4126:
        host.diagnostics.debugLog("LVM_SETCOLUMNWIDTH");
        break;
    case 4127:
        host.diagnostics.debugLog("LVM_GETHEADER");
        break;
    case 4129:
        host.diagnostics.debugLog("LVM_CREATEDRAGIMAGE");
        break;
    case 4130:
        host.diagnostics.debugLog("LVM_GETVIEWRECT");
        break;
    case 4131:
        host.diagnostics.debugLog("LVM_GETTEXTCOLOR");
        break;
    case 4132:
        host.diagnostics.debugLog("LVM_SETTEXTCOLOR");
        break;
    case 4133:
        host.diagnostics.debugLog("LVM_GETTEXTBKCOLOR");
        break;
    case 4134:
        host.diagnostics.debugLog("LVM_SETTEXTBKCOLOR");
        break;
    case 4135:
        host.diagnostics.debugLog("LVM_GETTOPINDEX");
        break;
    case 4136:
        host.diagnostics.debugLog("LVM_GETCOUNTPERPAGE");
        break;
    case 4137:
        host.diagnostics.debugLog("LVM_GETORIGIN");
        break;
    case 4138:
        host.diagnostics.debugLog("LVM_UPDATE");
        break;
    case 4139:
        host.diagnostics.debugLog("LVM_SETITEMSTATE");
        break;
    case 4140:
        host.diagnostics.debugLog("LVM_GETITEMSTATE");
        break;
    case 4141:
        host.diagnostics.debugLog("LVM_GETITEMTEXTA");
        break;
    case 4142:
        host.diagnostics.debugLog("LVM_SETITEMTEXTA");
        break;
    case 4143:
        host.diagnostics.debugLog("LVM_SETITEMCOUNT");
        break;
    case 4144:
        host.diagnostics.debugLog("LVM_SORTITEMS");
        break;
    case 4145:
        host.diagnostics.debugLog("LVM_SETITEMPOSITION32");
        break;
    case 4146:
        host.diagnostics.debugLog("LVM_GETSELECTEDCOUNT");
        break;
    case 4147:
        host.diagnostics.debugLog("LVM_GETITEMSPACING");
        break;
    case 4148:
        host.diagnostics.debugLog("LVM_GETISEARCHSTRINGA");
        break;
    case 4149:
        host.diagnostics.debugLog("LVM_SETICONSPACING");
        break;
    case 4150:
        host.diagnostics.debugLog("LVM_SETEXTENDEDLISTVIEWSTYLE");
        break;
    case 4151:
        host.diagnostics.debugLog("LVM_GETEXTENDEDLISTVIEWSTYLE");
        break;
    case 4152:
        host.diagnostics.debugLog("LVM_GETSUBITEMRECT");
        break;
    case 4153:
        host.diagnostics.debugLog("LVM_SUBITEMHITTEST");
        break;
    case 4154:
        host.diagnostics.debugLog("LVM_SETCOLUMNORDERARRAY");
        break;
    case 4155:
        host.diagnostics.debugLog("LVM_GETCOLUMNORDERARRAY");
        break;
    case 4156:
        host.diagnostics.debugLog("LVM_SETHOTITEM");
        break;
    case 4157:
        host.diagnostics.debugLog("LVM_GETHOTITEM");
        break;
    case 4158:
        host.diagnostics.debugLog("LVM_SETHOTCURSOR");
        break;
    case 4159:
        host.diagnostics.debugLog("LVM_GETHOTCURSOR");
        break;
    case 4160:
        host.diagnostics.debugLog("LVM_APPROXIMATEVIEWRECT");
        break;
    case 4161:
        host.diagnostics.debugLog("LVM_SETWORKAREAS");
        break;
    case 4162:
        host.diagnostics.debugLog("LVM_GETSELECTIONMARK");
        break;
    case 4163:
        host.diagnostics.debugLog("LVM_SETSELECTIONMARK");
        break;
    case 4164:
        host.diagnostics.debugLog("LVM_SETBKIMAGEA");
        break;
    case 4165:
        host.diagnostics.debugLog("LVM_GETBKIMAGEA");
        break;
    case 4166:
        host.diagnostics.debugLog("LVM_GETWORKAREAS");
        break;
    case 4167:
        host.diagnostics.debugLog("LVM_SETHOVERTIME");
        break;
    case 4168:
        host.diagnostics.debugLog("LVM_GETHOVERTIME");
        break;
    case 4169:
        host.diagnostics.debugLog("LVM_GETNUMBEROFWORKAREAS");
        break;
    case 4170:
        host.diagnostics.debugLog("LVM_SETTOOLTIPS");
        break;
    case 4171:
        host.diagnostics.debugLog("LVM_GETITEMW");
        break;
    case 4172:
        host.diagnostics.debugLog("LVM_SETITEMW");
        break;
    case 4173:
        host.diagnostics.debugLog("LVM_INSERTITEMW");
        break;
    case 4174:
        host.diagnostics.debugLog("LVM_GETTOOLTIPS");
        break;
    case 4179:
        host.diagnostics.debugLog("LVM_FINDITEMW");
        break;
    case 4183:
        host.diagnostics.debugLog("LVM_GETSTRINGWIDTHW");
        break;
    case 4191:
        host.diagnostics.debugLog("LVM_GETCOLUMNW");
        break;
    case 4192:
        host.diagnostics.debugLog("LVM_SETCOLUMNW");
        break;
    case 4193:
        host.diagnostics.debugLog("LVM_INSERTCOLUMNW");
        break;
    case 4211:
        host.diagnostics.debugLog("LVM_GETITEMTEXTW");
        break;
    case 4212:
        host.diagnostics.debugLog("LVM_SETITEMTEXTW");
        break;
    case 4213:
        host.diagnostics.debugLog("LVM_GETISEARCHSTRINGW");
        break;
    case 4214:
        host.diagnostics.debugLog("LVM_EDITLABELW");
        break;
    case 4235:
        host.diagnostics.debugLog("LVM_GETBKIMAGEW");
        break;
    case 4236:
        host.diagnostics.debugLog("LVM_SETSELECTEDCOLUMN");
        break;
    case 4237:
        host.diagnostics.debugLog("LVM_SETTILEWIDTH");
        break;
    case 4238:
        host.diagnostics.debugLog("LVM_SETVIEW");
        break;
    case 4239:
        host.diagnostics.debugLog("LVM_GETVIEW");
        break;
    case 4241:
        host.diagnostics.debugLog("LVM_INSERTGROUP");
        break;
    case 4243:
        host.diagnostics.debugLog("LVM_SETGROUPINFO");
        break;
    case 4245:
        host.diagnostics.debugLog("LVM_GETGROUPINFO");
        break;
    case 4246:
        host.diagnostics.debugLog("LVM_REMOVEGROUP");
        break;
    case 4247:
        host.diagnostics.debugLog("LVM_MOVEGROUP");
        break;
    case 4250:
        host.diagnostics.debugLog("LVM_MOVEITEMTOGROUP");
        break;
    case 4251:
        host.diagnostics.debugLog("LVM_SETGROUPMETRICS");
        break;
    case 4252:
        host.diagnostics.debugLog("LVM_GETGROUPMETRICS");
        break;
    case 4253:
        host.diagnostics.debugLog("LVM_ENABLEGROUPVIEW");
        break;
    case 4254:
        host.diagnostics.debugLog("LVM_SORTGROUPS");
        break;
    case 4255:
        host.diagnostics.debugLog("LVM_INSERTGROUPSORTED");
        break;
    case 4256:
        host.diagnostics.debugLog("LVM_REMOVEALLGROUPS");
        break;
    case 4257:
        host.diagnostics.debugLog("LVM_HASGROUP");
        break;
    case 4258:
        host.diagnostics.debugLog("LVM_SETTILEVIEWINFO");
        break;
    case 4259:
        host.diagnostics.debugLog("LVM_GETTILEVIEWINFO");
        break;
    case 4260:
        host.diagnostics.debugLog("LVM_SETTILEINFO");
        break;
    case 4261:
        host.diagnostics.debugLog("LVM_GETTILEINFO");
        break;
    case 4262:
        host.diagnostics.debugLog("LVM_SETINSERTMARK");
        break;
    case 4263:
        host.diagnostics.debugLog("LVM_GETINSERTMARK");
        break;
    case 4264:
        host.diagnostics.debugLog("LVM_INSERTMARKHITTEST");
        break;
    case 4265:
        host.diagnostics.debugLog("LVM_GETINSERTMARKRECT");
        break;
    case 4266:
        host.diagnostics.debugLog("LVM_SETINSERTMARKCOLOR");
        break;
    case 4267:
        host.diagnostics.debugLog("LVM_GETINSERTMARKCOLOR");
        break;
    case 4269:
        host.diagnostics.debugLog("LVM_SETINFOTIP");
        break;
    case 4270:
        host.diagnostics.debugLog("LVM_GETSELECTEDCOLUMN");
        break;
    case 4271:
        host.diagnostics.debugLog("LVM_ISGROUPVIEWENABLED");
        break;
    case 4272:
        host.diagnostics.debugLog("LVM_GETOUTLINECOLOR");
        break;
    case 4273:
        host.diagnostics.debugLog("LVM_SETOUTLINECOLOR");
        break;
    case 4275:
        host.diagnostics.debugLog("LVM_CANCELEDITLABEL");
        break;
    case 4276:
        host.diagnostics.debugLog("LVM_MAPINDEXTOID");
        break;
    case 4277:
        host.diagnostics.debugLog("LVM_MAPIDTOINDEX");
        break;
    case 4278:
        host.diagnostics.debugLog("LVM_ISITEMVISIBLE");
        break;
    case 8192:
        host.diagnostics.debugLog("OCM__BASE");
        break;
    case 8197:
        host.diagnostics.debugLog("LVM_SETUNICODEFORMAT");
        break;
    case 8198:
        host.diagnostics.debugLog("LVM_GETUNICODEFORMAT");
        break;
    case 8217:
        host.diagnostics.debugLog("OCM_CTLCOLOR");
        break;
    case 8235:
        host.diagnostics.debugLog("OCM_DRAWITEM");
        break;
    case 8236:
        host.diagnostics.debugLog("OCM_MEASUREITEM");
        break;
    case 8237:
        host.diagnostics.debugLog("OCM_DELETEITEM");
        break;
    case 8238:
        host.diagnostics.debugLog("OCM_VKEYTOITEM");
        break;
    case 8239:
        host.diagnostics.debugLog("OCM_CHARTOITEM");
        break;
    case 8249:
        host.diagnostics.debugLog("OCM_COMPAREITEM");
        break;
    case 8270:
        host.diagnostics.debugLog("OCM_NOTIFY");
        break;
    case 8465:
        host.diagnostics.debugLog("OCM_COMMAND");
        break;
    case 8468:
        host.diagnostics.debugLog("OCM_HSCROLL");
        break;
    case 8469:
        host.diagnostics.debugLog("OCM_VSCROLL");
        break;
    case 8498:
        host.diagnostics.debugLog("OCM_CTLCOLORMSGBOX");
        break;
    case 8499:
        host.diagnostics.debugLog("OCM_CTLCOLOREDIT");
        break;
    case 8500:
        host.diagnostics.debugLog("OCM_CTLCOLORLISTBOX");
        break;
    case 8501:
        host.diagnostics.debugLog("OCM_CTLCOLORBTN");
        break;
    case 8502:
        host.diagnostics.debugLog("OCM_CTLCOLORDLG");
        break;
    case 8503:
        host.diagnostics.debugLog("OCM_CTLCOLORSCROLLBAR");
        break;
    case 8504:
        host.diagnostics.debugLog("OCM_CTLCOLORSTATIC");
        break;
    case 8720:
        host.diagnostics.debugLog("OCM_PARENTNOTIFY");
        break;
    case 32768:
        host.diagnostics.debugLog("WM_APP");
        break;
    case 52429:
        host.diagnostics.debugLog("WM_RASDIALEVENT");
        break;
    default:
        host.diagnostics.debugLog("Unknown Window Message 0x" + msg.toString(16));
        break;
    }
}


function CreateMessagesNamesArray () {

    let arr = new Array(52430);
    
    arr[0] = "WM_NULL";
    arr[1] = "WM_CREATE";
    arr[2] = "WM_DESTROY";
    arr[3] = "WM_MOVE";
    arr[5] = "WM_SIZE";
    arr[6] = "WM_ACTIVATE";
    arr[7] = "WM_SETFOCUS";
    arr[8] = "WM_KILLFOCUS";
    arr[10] = "WM_ENABLE";
    arr[11] = "WM_SETREDRAW";
    arr[12] = "WM_SETTEXT";
    arr[13] = "WM_GETTEXT";
    arr[14] = "WM_GETTEXTLENGTH";
    arr[15] = "WM_PAINT";
    arr[16] = "WM_CLOSE";
    arr[17] = "WM_QUERYENDSESSION";
    arr[18] = "WM_QUIT";
    arr[19] = "WM_QUERYOPEN";
    arr[20] = "WM_ERASEBKGND";
    arr[21] = "WM_SYSCOLORCHANGE";
    arr[22] = "WM_ENDSESSION";
    arr[24] = "WM_SHOWWINDOW";
    arr[25] = "WM_CTLCOLOR";
    arr[26] = "WM_WININICHANGE";
    arr[27] = "WM_DEVMODECHANGE";
    arr[28] = "WM_ACTIVATEAPP";
    arr[29] = "WM_FONTCHANGE";
    arr[30] = "WM_TIMECHANGE";
    arr[31] = "WM_CANCELMODE";
    arr[32] = "WM_SETCURSOR";
    arr[33] = "WM_MOUSEACTIVATE";
    arr[34] = "WM_CHILDACTIVATE";
    arr[35] = "WM_QUEUESYNC";
    arr[36] = "WM_GETMINMAXINFO";
    arr[38] = "WM_PAINTICON";
    arr[39] = "WM_ICONERASEBKGND";
    arr[40] = "WM_NEXTDLGCTL";
    arr[42] = "WM_SPOOLERSTATUS";
    arr[43] = "WM_DRAWITEM";
    arr[44] = "WM_MEASUREITEM";
    arr[45] = "WM_DELETEITEM";
    arr[46] = "WM_VKEYTOITEM";
    arr[47] = "WM_CHARTOITEM";
    arr[48] = "WM_SETFONT";
    arr[49] = "WM_GETFONT";
    arr[50] = "WM_SETHOTKEY";
    arr[51] = "WM_GETHOTKEY";
    arr[55] = "WM_QUERYDRAGICON";
    arr[57] = "WM_COMPAREITEM";
    arr[61] = "WM_GETOBJECT";
    arr[65] = "WM_COMPACTING";
    arr[68] = "WM_COMMNOTIFY";
    arr[70] = "WM_WINDOWPOSCHANGING";
    arr[71] = "WM_WINDOWPOSCHANGED";
    arr[72] = "WM_POWER";
    arr[73] = "WM_COPYGLOBALDATA";
    arr[74] = "WM_COPYDATA";
    arr[75] = "WM_CANCELJOURNAL";
    arr[78] = "WM_NOTIFY";
    arr[80] = "WM_INPUTLANGCHANGEREQUEST";
    arr[81] = "WM_INPUTLANGCHANGE";
    arr[82] = "WM_TCARD";
    arr[83] = "WM_HELP";
    arr[84] = "WM_USERCHANGED";
    arr[85] = "WM_NOTIFYFORMAT";
    arr[123] = "WM_CONTEXTMENU";
    arr[124] = "WM_STYLECHANGING";
    arr[125] = "WM_STYLECHANGED";
    arr[126] = "WM_DISPLAYCHANGE";
    arr[127] = "WM_GETICON";
    arr[128] = "WM_SETICON";
    arr[129] = "WM_NCCREATE";
    arr[130] = "WM_NCDESTROY";
    arr[131] = "WM_NCCALCSIZE";
    arr[132] = "WM_NCHITTEST";
    arr[133] = "WM_NCPAINT";
    arr[134] = "WM_NCACTIVATE";
    arr[135] = "WM_GETDLGCODE";
    arr[136] = "WM_SYNCPAINT";
    arr[160] = "WM_NCMOUSEMOVE";
    arr[161] = "WM_NCLBUTTONDOWN";
    arr[162] = "WM_NCLBUTTONUP";
    arr[163] = "WM_NCLBUTTONDBLCLK";
    arr[164] = "WM_NCRBUTTONDOWN";
    arr[165] = "WM_NCRBUTTONUP";
    arr[166] = "WM_NCRBUTTONDBLCLK";
    arr[167] = "WM_NCMBUTTONDOWN";
    arr[168] = "WM_NCMBUTTONUP";
    arr[169] = "WM_NCMBUTTONDBLCLK";
    arr[171] = "WM_NCXBUTTONDOWN";
    arr[172] = "WM_NCXBUTTONUP";
    arr[173] = "WM_NCXBUTTONDBLCLK";
    arr[176] = "EM_GETSEL";
    arr[177] = "EM_SETSEL";
    arr[178] = "EM_GETRECT";
    arr[179] = "EM_SETRECT";
    arr[180] = "EM_SETRECTNP";
    arr[181] = "EM_SCROLL";
    arr[182] = "EM_LINESCROLL";
    arr[183] = "EM_SCROLLCARET";
    arr[184] = "EM_GETMODIFY";
    arr[185] = "EM_SETMODIFY";
    arr[186] = "EM_GETLINECOUNT";
    arr[187] = "EM_LINEINDEX";
    arr[188] = "EM_SETHANDLE";
    arr[189] = "EM_GETHANDLE";
    arr[190] = "EM_GETTHUMB";
    arr[193] = "EM_LINELENGTH";
    arr[194] = "EM_REPLACESEL";
    arr[195] = "EM_SETFONT";
    arr[196] = "EM_GETLINE";
    arr[197] = "EM_LIMITTEXT";
    arr[197] = "EM_SETLIMITTEXT";
    arr[198] = "EM_CANUNDO";
    arr[199] = "EM_UNDO";
    arr[200] = "EM_FMTLINES";
    arr[201] = "EM_LINEFROMCHAR";
    arr[202] = "EM_SETWORDBREAK";
    arr[203] = "EM_SETTABSTOPS";
    arr[204] = "EM_SETPASSWORDCHAR";
    arr[205] = "EM_EMPTYUNDOBUFFER";
    arr[206] = "EM_GETFIRSTVISIBLELINE";
    arr[207] = "EM_SETREADONLY";
    arr[208] = "EM_SETWORDBREAKPROC";
    arr[209] = "EM_GETWORDBREAKPROC";
    arr[210] = "EM_GETPASSWORDCHAR";
    arr[211] = "EM_SETMARGINS";
    arr[212] = "EM_GETMARGINS";
    arr[213] = "EM_GETLIMITTEXT";
    arr[214] = "EM_POSFROMCHAR";
    arr[215] = "EM_CHARFROMPOS";
    arr[216] = "EM_SETIMESTATUS";
    arr[217] = "EM_GETIMESTATUS";
    arr[224] = "SBM_SETPOS";
    arr[225] = "SBM_GETPOS";
    arr[226] = "SBM_SETRANGE";
    arr[227] = "SBM_GETRANGE";
    arr[228] = "SBM_ENABLE_ARROWS";
    arr[230] = "SBM_SETRANGEREDRAW";
    arr[233] = "SBM_SETSCROLLINFO";
    arr[234] = "SBM_GETSCROLLINFO";
    arr[235] = "SBM_GETSCROLLBARINFO";
    arr[240] = "BM_GETCHECK";
    arr[241] = "BM_SETCHECK";
    arr[242] = "BM_GETSTATE";
    arr[243] = "BM_SETSTATE";
    arr[244] = "BM_SETSTYLE";
    arr[245] = "BM_CLICK";
    arr[246] = "BM_GETIMAGE";
    arr[247] = "BM_SETIMAGE";
    arr[248] = "BM_SETDONTCLICK";
    arr[255] = "WM_INPUT";
    arr[256] = "WM_KEYDOWN";
    arr[256] = "WM_KEYFIRST";
    arr[257] = "WM_KEYUP";
    arr[258] = "WM_CHAR";
    arr[259] = "WM_DEADCHAR";
    arr[260] = "WM_SYSKEYDOWN";
    arr[261] = "WM_SYSKEYUP";
    arr[262] = "WM_SYSCHAR";
    arr[263] = "WM_SYSDEADCHAR";
    arr[265] = "WM_UNICHAR / WM_KEYLAST";
    arr[265] = "WM_WNT_CONVERTREQUESTEX";
    arr[266] = "WM_CONVERTREQUEST";
    arr[267] = "WM_CONVERTRESULT";
    arr[268] = "WM_INTERIM";
    arr[269] = "WM_IME_STARTCOMPOSITION";
    arr[270] = "WM_IME_ENDCOMPOSITION";
    arr[271] = "WM_IME_COMPOSITION";
    arr[271] = "WM_IME_KEYLAST";
    arr[272] = "WM_INITDIALOG";
    arr[273] = "WM_COMMAND";
    arr[274] = "WM_SYSCOMMAND";
    arr[275] = "WM_TIMER";
    arr[276] = "WM_HSCROLL";
    arr[277] = "WM_VSCROLL";
    arr[278] = "WM_INITMENU";
    arr[279] = "WM_INITMENUPOPUP";
    arr[280] = "WM_SYSTIMER";
    arr[287] = "WM_MENUSELECT";
    arr[288] = "WM_MENUCHAR";
    arr[289] = "WM_ENTERIDLE";
    arr[290] = "WM_MENURBUTTONUP";
    arr[291] = "WM_MENUDRAG";
    arr[292] = "WM_MENUGETOBJECT";
    arr[293] = "WM_UNINITMENUPOPUP";
    arr[294] = "WM_MENUCOMMAND";
    arr[295] = "WM_CHANGEUISTATE";
    arr[296] = "WM_UPDATEUISTATE";
    arr[297] = "WM_QUERYUISTATE";
    arr[306] = "WM_CTLCOLORMSGBOX";
    arr[307] = "WM_CTLCOLOREDIT";
    arr[308] = "WM_CTLCOLORLISTBOX";
    arr[309] = "WM_CTLCOLORBTN";
    arr[310] = "WM_CTLCOLORDLG";
    arr[311] = "WM_CTLCOLORSCROLLBAR";
    arr[312] = "WM_CTLCOLORSTATIC";
    arr[512] = "WM_MOUSEFIRST";
    arr[512] = "WM_MOUSEMOVE";
    arr[513] = "WM_LBUTTONDOWN";
    arr[514] = "WM_LBUTTONUP";
    arr[515] = "WM_LBUTTONDBLCLK";
    arr[516] = "WM_RBUTTONDOWN";
    arr[517] = "WM_RBUTTONUP";
    arr[518] = "WM_RBUTTONDBLCLK";
    arr[519] = "WM_MBUTTONDOWN";
    arr[520] = "WM_MBUTTONUP";
    arr[521] = "WM_MBUTTONDBLCLK";
    arr[521] = "WM_MOUSELAST";
    arr[522] = "WM_MOUSEWHEEL";
    arr[523] = "WM_XBUTTONDOWN";
    arr[524] = "WM_XBUTTONUP";
    arr[525] = "WM_XBUTTONDBLCLK";
    arr[526] = "WM_MOUSEHWHEEL";
    arr[528] = "WM_PARENTNOTIFY";
    arr[529] = "WM_ENTERMENULOOP";
    arr[530] = "WM_EXITMENULOOP";
    arr[531] = "WM_NEXTMENU";
    arr[532] = "WM_SIZING";
    arr[533] = "WM_CAPTURECHANGED";
    arr[534] = "WM_MOVING";
    arr[536] = "WM_POWERBROADCAST";
    arr[537] = "WM_DEVICECHANGE";
    arr[544] = "WM_MDICREATE";
    arr[545] = "WM_MDIDESTROY";
    arr[546] = "WM_MDIACTIVATE";
    arr[547] = "WM_MDIRESTORE";
    arr[548] = "WM_MDINEXT";
    arr[549] = "WM_MDIMAXIMIZE";
    arr[550] = "WM_MDITILE";
    arr[551] = "WM_MDICASCADE";
    arr[552] = "WM_MDIICONARRANGE";
    arr[553] = "WM_MDIGETACTIVE";
    arr[560] = "WM_MDISETMENU";
    arr[561] = "WM_ENTERSIZEMOVE";
    arr[562] = "WM_EXITSIZEMOVE";
    arr[563] = "WM_DROPFILES";
    arr[564] = "WM_MDIREFRESHMENU";
    arr[640] = "WM_IME_REPORT";
    arr[641] = "WM_IME_SETCONTEXT";
    arr[642] = "WM_IME_NOTIFY";
    arr[643] = "WM_IME_CONTROL";
    arr[644] = "WM_IME_COMPOSITIONFULL";
    arr[645] = "WM_IME_SELECT";
    arr[646] = "WM_IME_CHAR";
    arr[648] = "WM_IME_REQUEST";
    arr[656] = "WM_IMEKEYDOWN";
    arr[656] = "WM_IME_KEYDOWN";
    arr[657] = "WM_IMEKEYUP";
    arr[657] = "WM_IME_KEYUP";
    arr[672] = "WM_NCMOUSEHOVER";
    arr[673] = "WM_MOUSEHOVER";
    arr[674] = "WM_NCMOUSELEAVE";
    arr[675] = "WM_MOUSELEAVE";
    arr[768] = "WM_CUT";
    arr[769] = "WM_COPY";
    arr[770] = "WM_PASTE";
    arr[771] = "WM_CLEAR";
    arr[772] = "WM_UNDO";
    arr[773] = "WM_RENDERFORMAT";
    arr[774] = "WM_RENDERALLFORMATS";
    arr[775] = "WM_DESTROYCLIPBOARD";
    arr[776] = "WM_DRAWCLIPBOARD";
    arr[777] = "WM_PAINTCLIPBOARD";
    arr[778] = "WM_VSCROLLCLIPBOARD";
    arr[779] = "WM_SIZECLIPBOARD";
    arr[780] = "WM_ASKCBFORMATNAME";
    arr[781] = "WM_CHANGECBCHAIN";
    arr[782] = "WM_HSCROLLCLIPBOARD";
    arr[783] = "WM_QUERYNEWPALETTE";
    arr[784] = "WM_PALETTEISCHANGING";
    arr[785] = "WM_PALETTECHANGED";
    arr[786] = "WM_HOTKEY";
    arr[791] = "WM_PRINT";
    arr[792] = "WM_PRINTCLIENT";
    arr[793] = "WM_APPCOMMAND";
    arr[856] = "WM_HANDHELDFIRST";
    arr[863] = "WM_HANDHELDLAST";
    arr[864] = "WM_AFXFIRST";
    arr[895] = "WM_AFXLAST";
    arr[896] = "WM_PENWINFIRST";
    arr[897] = "WM_RCRESULT";
    arr[898] = "WM_HOOKRCRESULT";
    arr[899] = "WM_GLOBALRCCHANGE";
    arr[899] = "WM_PENMISCINFO";
    arr[900] = "WM_SKB";
    arr[901] = "WM_HEDITCTL";
    arr[901] = "WM_PENCTL";
    arr[902] = "WM_PENMISC";
    arr[903] = "WM_CTLINIT";
    arr[904] = "WM_PENEVENT";
    arr[911] = "WM_PENWINLAST";
    arr[1024] = "DDM_SETFMT";
    arr[1024] = "DM_GETDEFID";
    arr[1024] = "NIN_SELECT";
    arr[1024] = "TBM_GETPOS";
    arr[1024] = "WM_PSD_PAGESETUPDLG";
    arr[1024] = "WM_USER";
    arr[1025] = "CBEM_INSERTITEMA";
    arr[1025] = "DDM_DRAW";
    arr[1025] = "DM_SETDEFID";
    arr[1025] = "HKM_SETHOTKEY";
    arr[1025] = "PBM_SETRANGE";
    arr[1025] = "RB_INSERTBANDA";
    arr[1025] = "SB_SETTEXTA";
    arr[1025] = "TB_ENABLEBUTTON";
    arr[1025] = "TBM_GETRANGEMIN";
    arr[1025] = "TTM_ACTIVATE";
    arr[1025] = "WM_CHOOSEFONT_GETLOGFONT";
    arr[1025] = "WM_PSD_FULLPAGERECT";
    arr[1026] = "CBEM_SETIMAGELIST";
    arr[1026] = "DDM_CLOSE";
    arr[1026] = "DM_REPOSITION";
    arr[1026] = "HKM_GETHOTKEY";
    arr[1026] = "PBM_SETPOS";
    arr[1026] = "RB_DELETEBAND";
    arr[1026] = "SB_GETTEXTA";
    arr[1026] = "TB_CHECKBUTTON";
    arr[1026] = "TBM_GETRANGEMAX";
    arr[1026] = "WM_PSD_MINMARGINRECT";
    arr[1027] = "CBEM_GETIMAGELIST";
    arr[1027] = "DDM_BEGIN";
    arr[1027] = "HKM_SETRULES";
    arr[1027] = "PBM_DELTAPOS";
    arr[1027] = "RB_GETBARINFO";
    arr[1027] = "SB_GETTEXTLENGTHA";
    arr[1027] = "TBM_GETTIC";
    arr[1027] = "TB_PRESSBUTTON";
    arr[1027] = "TTM_SETDELAYTIME";
    arr[1027] = "WM_PSD_MARGINRECT";
    arr[1028] = "CBEM_GETITEMA";
    arr[1028] = "DDM_END";
    arr[1028] = "PBM_SETSTEP";
    arr[1028] = "RB_SETBARINFO";
    arr[1028] = "SB_SETPARTS";
    arr[1028] = "TB_HIDEBUTTON";
    arr[1028] = "TBM_SETTIC";
    arr[1028] = "TTM_ADDTOOLA";
    arr[1028] = "WM_PSD_GREEKTEXTRECT";
    arr[1029] = "CBEM_SETITEMA";
    arr[1029] = "PBM_STEPIT";
    arr[1029] = "TB_INDETERMINATE";
    arr[1029] = "TBM_SETPOS";
    arr[1029] = "TTM_DELTOOLA";
    arr[1029] = "WM_PSD_ENVSTAMPRECT";
    arr[1030] = "CBEM_GETCOMBOCONTROL";
    arr[1030] = "PBM_SETRANGE32";
    arr[1030] = "RB_SETBANDINFOA";
    arr[1030] = "SB_GETPARTS";
    arr[1030] = "TB_MARKBUTTON";
    arr[1030] = "TBM_SETRANGE";
    arr[1030] = "TTM_NEWTOOLRECTA";
    arr[1030] = "WM_PSD_YAFULLPAGERECT";
    arr[1031] = "CBEM_GETEDITCONTROL";
    arr[1031] = "PBM_GETRANGE";
    arr[1031] = "RB_SETPARENT";
    arr[1031] = "SB_GETBORDERS";
    arr[1031] = "TBM_SETRANGEMIN";
    arr[1031] = "TTM_RELAYEVENT";
    arr[1032] = "CBEM_SETEXSTYLE";
    arr[1032] = "PBM_GETPOS";
    arr[1032] = "RB_HITTEST";
    arr[1032] = "SB_SETMINHEIGHT";
    arr[1032] = "TBM_SETRANGEMAX";
    arr[1032] = "TTM_GETTOOLINFOA";
    arr[1033] = "CBEM_GETEXSTYLE";
    arr[1033] = "CBEM_GETEXTENDEDSTYLE";
    arr[1033] = "PBM_SETBARCOLOR";
    arr[1033] = "RB_GETRECT";
    arr[1033] = "SB_SIMPLE";
    arr[1033] = "TB_ISBUTTONENABLED";
    arr[1033] = "TBM_CLEARTICS";
    arr[1033] = "TTM_SETTOOLINFOA";
    arr[1034] = "CBEM_HASEDITCHANGED";
    arr[1034] = "RB_INSERTBANDW";
    arr[1034] = "SB_GETRECT";
    arr[1034] = "TB_ISBUTTONCHECKED";
    arr[1034] = "TBM_SETSEL";
    arr[1034] = "TTM_HITTESTA";
    arr[1034] = "WIZ_QUERYNUMPAGES";
    arr[1035] = "CBEM_INSERTITEMW";
    arr[1035] = "RB_SETBANDINFOW";
    arr[1035] = "SB_SETTEXTW";
    arr[1035] = "TB_ISBUTTONPRESSED";
    arr[1035] = "TBM_SETSELSTART";
    arr[1035] = "TTM_GETTEXTA";
    arr[1035] = "WIZ_NEXT";
    arr[1036] = "CBEM_SETITEMW";
    arr[1036] = "RB_GETBANDCOUNT";
    arr[1036] = "SB_GETTEXTLENGTHW";
    arr[1036] = "TB_ISBUTTONHIDDEN";
    arr[1036] = "TBM_SETSELEND";
    arr[1036] = "TTM_UPDATETIPTEXTA";
    arr[1036] = "WIZ_PREV";
    arr[1037] = "CBEM_GETITEMW";
    arr[1037] = "RB_GETROWCOUNT";
    arr[1037] = "SB_GETTEXTW";
    arr[1037] = "TB_ISBUTTONINDETERMINATE";
    arr[1037] = "TTM_GETTOOLCOUNT";
    arr[1038] = "CBEM_SETEXTENDEDSTYLE";
    arr[1038] = "RB_GETROWHEIGHT";
    arr[1038] = "SB_ISSIMPLE";
    arr[1038] = "TB_ISBUTTONHIGHLIGHTED";
    arr[1038] = "TBM_GETPTICS";
    arr[1038] = "TTM_ENUMTOOLSA";
    arr[1039] = "SB_SETICON";
    arr[1039] = "TBM_GETTICPOS";
    arr[1039] = "TTM_GETCURRENTTOOLA";
    arr[1040] = "RB_IDTOINDEX";
    arr[1040] = "SB_SETTIPTEXTA";
    arr[1040] = "TBM_GETNUMTICS";
    arr[1040] = "TTM_WINDOWFROMPOINT";
    arr[1041] = "RB_GETTOOLTIPS";
    arr[1041] = "SB_SETTIPTEXTW";
    arr[1041] = "TBM_GETSELSTART";
    arr[1041] = "TB_SETSTATE";
    arr[1041] = "TTM_TRACKACTIVATE";
    arr[1042] = "RB_SETTOOLTIPS";
    arr[1042] = "SB_GETTIPTEXTA";
    arr[1042] = "TB_GETSTATE";
    arr[1042] = "TBM_GETSELEND";
    arr[1042] = "TTM_TRACKPOSITION";
    arr[1043] = "RB_SETBKCOLOR";
    arr[1043] = "SB_GETTIPTEXTW";
    arr[1043] = "TB_ADDBITMAP";
    arr[1043] = "TBM_CLEARSEL";
    arr[1043] = "TTM_SETTIPBKCOLOR";
    arr[1044] = "RB_GETBKCOLOR";
    arr[1044] = "SB_GETICON";
    arr[1044] = "TB_ADDBUTTONSA";
    arr[1044] = "TBM_SETTICFREQ";
    arr[1044] = "TTM_SETTIPTEXTCOLOR";
    arr[1045] = "RB_SETTEXTCOLOR";
    arr[1045] = "TB_INSERTBUTTONA";
    arr[1045] = "TBM_SETPAGESIZE";
    arr[1045] = "TTM_GETDELAYTIME";
    arr[1046] = "RB_GETTEXTCOLOR";
    arr[1046] = "TB_DELETEBUTTON";
    arr[1046] = "TBM_GETPAGESIZE";
    arr[1046] = "TTM_GETTIPBKCOLOR";
    arr[1047] = "RB_SIZETORECT";
    arr[1047] = "TB_GETBUTTON";
    arr[1047] = "TBM_SETLINESIZE";
    arr[1047] = "TTM_GETTIPTEXTCOLOR";
    arr[1048] = "RB_BEGINDRAG";
    arr[1048] = "TB_BUTTONCOUNT";
    arr[1048] = "TBM_GETLINESIZE";
    arr[1048] = "TTM_SETMAXTIPWIDTH";
    arr[1049] = "RB_ENDDRAG";
    arr[1049] = "TB_COMMANDTOINDEX";
    arr[1049] = "TBM_GETTHUMBRECT";
    arr[1049] = "TTM_GETMAXTIPWIDTH";
    arr[1050] = "RB_DRAGMOVE";
    arr[1050] = "TBM_GETCHANNELRECT";
    arr[1050] = "TB_SAVERESTOREA";
    arr[1050] = "TTM_SETMARGIN";
    arr[1051] = "RB_GETBARHEIGHT";
    arr[1051] = "TB_CUSTOMIZE";
    arr[1051] = "TBM_SETTHUMBLENGTH";
    arr[1051] = "TTM_GETMARGIN";
    arr[1052] = "RB_GETBANDINFOW";
    arr[1052] = "TB_ADDSTRINGA";
    arr[1052] = "TBM_GETTHUMBLENGTH";
    arr[1052] = "TTM_POP";
    arr[1053] = "RB_GETBANDINFOA";
    arr[1053] = "TB_GETITEMRECT";
    arr[1053] = "TBM_SETTOOLTIPS";
    arr[1053] = "TTM_UPDATE";
    arr[1054] = "RB_MINIMIZEBAND";
    arr[1054] = "TB_BUTTONSTRUCTSIZE";
    arr[1054] = "TBM_GETTOOLTIPS";
    arr[1054] = "TTM_GETBUBBLESIZE";
    arr[1055] = "RB_MAXIMIZEBAND";
    arr[1055] = "TBM_SETTIPSIDE";
    arr[1055] = "TB_SETBUTTONSIZE";
    arr[1055] = "TTM_ADJUSTRECT";
    arr[1056] = "TBM_SETBUDDY";
    arr[1056] = "TB_SETBITMAPSIZE";
    arr[1056] = "TTM_SETTITLEA";
    arr[1057] = "MSG_FTS_JUMP_VA";
    arr[1057] = "TB_AUTOSIZE";
    arr[1057] = "TBM_GETBUDDY";
    arr[1057] = "TTM_SETTITLEW";
    arr[1058] = "RB_GETBANDBORDERS";
    arr[1059] = "MSG_FTS_JUMP_QWORD";
    arr[1059] = "RB_SHOWBAND";
    arr[1059] = "TB_GETTOOLTIPS";
    arr[1060] = "MSG_REINDEX_REQUEST";
    arr[1060] = "TB_SETTOOLTIPS";
    arr[1061] = "MSG_FTS_WHERE_IS_IT";
    arr[1061] = "RB_SETPALETTE";
    arr[1061] = "TB_SETPARENT";
    arr[1062] = "RB_GETPALETTE";
    arr[1063] = "RB_MOVEBAND";
    arr[1063] = "TB_SETROWS";
    arr[1064] = "TB_GETROWS";
    arr[1065] = "TB_GETBITMAPFLAGS";
    arr[1066] = "TB_SETCMDID";
    arr[1067] = "RB_PUSHCHEVRON";
    arr[1067] = "TB_CHANGEBITMAP";
    arr[1068] = "TB_GETBITMAP";
    arr[1069] = "MSG_GET_DEFFONT";
    arr[1069] = "TB_GETBUTTONTEXTA";
    arr[1070] = "TB_REPLACEBITMAP";
    arr[1071] = "TB_SETINDENT";
    arr[1072] = "TB_SETIMAGELIST";
    arr[1073] = "TB_GETIMAGELIST";
    arr[1074] = "TB_LOADIMAGES";
    arr[1074] = "EM_CANPASTE";
    arr[1074] = "TTM_ADDTOOLW";
    arr[1075] = "EM_DISPLAYBAND";
    arr[1075] = "TB_GETRECT";
    arr[1075] = "TTM_DELTOOLW";
    arr[1076] = "EM_EXGETSEL";
    arr[1076] = "TB_SETHOTIMAGELIST";
    arr[1076] = "TTM_NEWTOOLRECTW";
    arr[1077] = "EM_EXLIMITTEXT";
    arr[1077] = "TB_GETHOTIMAGELIST";
    arr[1077] = "TTM_GETTOOLINFOW";
    arr[1078] = "EM_EXLINEFROMCHAR";
    arr[1078] = "TB_SETDISABLEDIMAGELIST";
    arr[1078] = "TTM_SETTOOLINFOW";
    arr[1079] = "EM_EXSETSEL";
    arr[1079] = "TB_GETDISABLEDIMAGELIST";
    arr[1079] = "TTM_HITTESTW";
    arr[1080] = "EM_FINDTEXT";
    arr[1080] = "TB_SETSTYLE";
    arr[1080] = "TTM_GETTEXTW";
    arr[1081] = "EM_FORMATRANGE";
    arr[1081] = "TB_GETSTYLE";
    arr[1081] = "TTM_UPDATETIPTEXTW";
    arr[1082] = "EM_GETCHARFORMAT";
    arr[1082] = "TB_GETBUTTONSIZE";
    arr[1082] = "TTM_ENUMTOOLSW";
    arr[1083] = "EM_GETEVENTMASK";
    arr[1083] = "TB_SETBUTTONWIDTH";
    arr[1083] = "TTM_GETCURRENTTOOLW";
    arr[1084] = "EM_GETOLEINTERFACE";
    arr[1084] = "TB_SETMAXTEXTROWS";
    arr[1085] = "EM_GETPARAFORMAT";
    arr[1085] = "TB_GETTEXTROWS";
    arr[1086] = "EM_GETSELTEXT";
    arr[1086] = "TB_GETOBJECT";
    arr[1087] = "EM_HIDESELECTION";
    arr[1087] = "TB_GETBUTTONINFOW";
    arr[1088] = "EM_PASTESPECIAL";
    arr[1088] = "TB_SETBUTTONINFOW";
    arr[1089] = "EM_REQUESTRESIZE";
    arr[1089] = "TB_GETBUTTONINFOA";
    arr[1090] = "EM_SELECTIONTYPE";
    arr[1090] = "TB_SETBUTTONINFOA";
    arr[1091] = "EM_SETBKGNDCOLOR";
    arr[1091] = "TB_INSERTBUTTONW";
    arr[1092] = "EM_SETCHARFORMAT";
    arr[1092] = "TB_ADDBUTTONSW";
    arr[1093] = "EM_SETEVENTMASK";
    arr[1093] = "TB_HITTEST";
    arr[1094] = "EM_SETOLECALLBACK";
    arr[1094] = "TB_SETDRAWTEXTFLAGS";
    arr[1095] = "EM_SETPARAFORMAT";
    arr[1095] = "TB_GETHOTITEM";
    arr[1096] = "EM_SETTARGETDEVICE";
    arr[1096] = "TB_SETHOTITEM";
    arr[1097] = "EM_STREAMIN";
    arr[1097] = "TB_SETANCHORHIGHLIGHT";
    arr[1098] = "EM_STREAMOUT";
    arr[1098] = "TB_GETANCHORHIGHLIGHT";
    arr[1099] = "EM_GETTEXTRANGE";
    arr[1099] = "TB_GETBUTTONTEXTW";
    arr[1100] = "EM_FINDWORDBREAK";
    arr[1100] = "TB_SAVERESTOREW";
    arr[1101] = "EM_SETOPTIONS";
    arr[1101] = "TB_ADDSTRINGW";
    arr[1102] = "EM_GETOPTIONS";
    arr[1102] = "TB_MAPACCELERATORA";
    arr[1103] = "EM_FINDTEXTEX";
    arr[1103] = "TB_GETINSERTMARK";
    arr[1104] = "EM_GETWORDBREAKPROCEX";
    arr[1104] = "TB_SETINSERTMARK";
    arr[1105] = "EM_SETWORDBREAKPROCEX";
    arr[1105] = "TB_INSERTMARKHITTEST";
    arr[1106] = "EM_SETUNDOLIMIT";
    arr[1106] = "TB_MOVEBUTTON";
    arr[1107] = "TB_GETMAXSIZE";
    arr[1108] = "EM_REDO";
    arr[1108] = "TB_SETEXTENDEDSTYLE";
    arr[1109] = "EM_CANREDO";
    arr[1109] = "TB_GETEXTENDEDSTYLE";
    arr[1110] = "EM_GETUNDONAME";
    arr[1110] = "TB_GETPADDING";
    arr[1111] = "EM_GETREDONAME";
    arr[1111] = "TB_SETPADDING";
    arr[1112] = "EM_STOPGROUPTYPING";
    arr[1112] = "TB_SETINSERTMARKCOLOR";
    arr[1113] = "EM_SETTEXTMODE";
    arr[1113] = "TB_GETINSERTMARKCOLOR";
    arr[1114] = "EM_GETTEXTMODE";
    arr[1114] = "TB_MAPACCELERATORW";
    arr[1115] = "EM_AUTOURLDETECT";
    arr[1115] = "TB_GETSTRINGW";
    arr[1116] = "EM_GETAUTOURLDETECT";
    arr[1116] = "TB_GETSTRINGA";
    arr[1117] = "EM_SETPALETTE";
    arr[1118] = "EM_GETTEXTEX";
    arr[1119] = "EM_GETTEXTLENGTHEX";
    arr[1120] = "EM_SHOWSCROLLBAR";
    arr[1121] = "EM_SETTEXTEX";
    arr[1123] = "TAPI_REPLY";
    arr[1124] = "ACM_OPENA";
    arr[1124] = "BFFM_SETSTATUSTEXTA";
    arr[1124] = "CDM_FIRST";
    arr[1124] = "CDM_GETSPEC";
    arr[1124] = "EM_SETPUNCTUATION";
    arr[1124] = "IPM_CLEARADDRESS";
    arr[1124] = "WM_CAP_UNICODE_START";
    arr[1125] = "ACM_PLAY";
    arr[1125] = "BFFM_ENABLEOK";
    arr[1125] = "CDM_GETFILEPATH";
    arr[1125] = "EM_GETPUNCTUATION";
    arr[1125] = "IPM_SETADDRESS";
    arr[1125] = "PSM_SETCURSEL";
    arr[1125] = "UDM_SETRANGE";
    arr[1125] = "WM_CHOOSEFONT_SETLOGFONT";
    arr[1126] = "ACM_STOP";
    arr[1126] = "BFFM_SETSELECTIONA";
    arr[1126] = "CDM_GETFOLDERPATH";
    arr[1126] = "EM_SETWORDWRAPMODE";
    arr[1126] = "IPM_GETADDRESS";
    arr[1126] = "PSM_REMOVEPAGE";
    arr[1126] = "UDM_GETRANGE";
    arr[1126] = "WM_CAP_SET_CALLBACK_ERRORW";
    arr[1126] = "WM_CHOOSEFONT_SETFLAGS";
    arr[1127] = "ACM_OPENW";
    arr[1127] = "BFFM_SETSELECTIONW";
    arr[1127] = "CDM_GETFOLDERIDLIST";
    arr[1127] = "EM_GETWORDWRAPMODE";
    arr[1127] = "IPM_SETRANGE";
    arr[1127] = "PSM_ADDPAGE";
    arr[1127] = "UDM_SETPOS";
    arr[1127] = "WM_CAP_SET_CALLBACK_STATUSW";
    arr[1128] = "BFFM_SETSTATUSTEXTW";
    arr[1128] = "CDM_SETCONTROLTEXT";
    arr[1128] = "EM_SETIMECOLOR";
    arr[1128] = "IPM_SETFOCUS";
    arr[1128] = "PSM_CHANGED";
    arr[1128] = "UDM_GETPOS";
    arr[1129] = "CDM_HIDECONTROL";
    arr[1129] = "EM_GETIMECOLOR";
    arr[1129] = "IPM_ISBLANK";
    arr[1129] = "PSM_RESTARTWINDOWS";
    arr[1129] = "UDM_SETBUDDY";
    arr[1130] = "CDM_SETDEFEXT";
    arr[1130] = "EM_SETIMEOPTIONS";
    arr[1130] = "PSM_REBOOTSYSTEM";
    arr[1130] = "UDM_GETBUDDY";
    arr[1131] = "EM_GETIMEOPTIONS";
    arr[1131] = "PSM_CANCELTOCLOSE";
    arr[1131] = "UDM_SETACCEL";
    arr[1132] = "EM_CONVPOSITION";
    arr[1132] = "EM_CONVPOSITION";
    arr[1132] = "PSM_QUERYSIBLINGS";
    arr[1132] = "UDM_GETACCEL";
    arr[1133] = "MCIWNDM_GETZOOM";
    arr[1133] = "PSM_UNCHANGED";
    arr[1133] = "UDM_SETBASE";
    arr[1134] = "PSM_APPLY";
    arr[1134] = "UDM_GETBASE";
    arr[1135] = "PSM_SETTITLEA";
    arr[1135] = "UDM_SETRANGE32";
    arr[1136] = "PSM_SETWIZBUTTONS";
    arr[1136] = "UDM_GETRANGE32";
    arr[1136] = "WM_CAP_DRIVER_GET_NAMEW";
    arr[1137] = "PSM_PRESSBUTTON";
    arr[1137] = "UDM_SETPOS32";
    arr[1137] = "WM_CAP_DRIVER_GET_VERSIONW";
    arr[1138] = "PSM_SETCURSELID";
    arr[1138] = "UDM_GETPOS32";
    arr[1139] = "PSM_SETFINISHTEXTA";
    arr[1140] = "PSM_GETTABCONTROL";
    arr[1141] = "PSM_ISDIALOGMESSAGE";
    arr[1142] = "MCIWNDM_REALIZE";
    arr[1142] = "PSM_GETCURRENTPAGEHWND";
    arr[1143] = "MCIWNDM_SETTIMEFORMATA";
    arr[1143] = "PSM_INSERTPAGE";
    arr[1144] = "EM_SETLANGOPTIONS";
    arr[1144] = "MCIWNDM_GETTIMEFORMATA";
    arr[1144] = "PSM_SETTITLEW";
    arr[1144] = "WM_CAP_FILE_SET_CAPTURE_FILEW";
    arr[1145] = "EM_GETLANGOPTIONS";
    arr[1145] = "MCIWNDM_VALIDATEMEDIA";
    arr[1145] = "PSM_SETFINISHTEXTW";
    arr[1145] = "WM_CAP_FILE_GET_CAPTURE_FILEW";
    arr[1146] = "EM_GETIMECOMPMODE";
    arr[1147] = "EM_FINDTEXTW";
    arr[1147] = "MCIWNDM_PLAYTO";
    arr[1147] = "WM_CAP_FILE_SAVEASW";
    arr[1148] = "EM_FINDTEXTEXW";
    arr[1148] = "MCIWNDM_GETFILENAMEA";
    arr[1149] = "EM_RECONVERSION";
    arr[1149] = "MCIWNDM_GETDEVICEA";
    arr[1149] = "PSM_SETHEADERTITLEA";
    arr[1149] = "WM_CAP_FILE_SAVEDIBW";
    arr[1150] = "EM_SETIMEMODEBIAS";
    arr[1150] = "MCIWNDM_GETPALETTE";
    arr[1150] = "PSM_SETHEADERTITLEW";
    arr[1151] = "EM_GETIMEMODEBIAS";
    arr[1151] = "MCIWNDM_SETPALETTE";
    arr[1151] = "PSM_SETHEADERSUBTITLEA";
    arr[1152] = "MCIWNDM_GETERRORA";
    arr[1152] = "PSM_SETHEADERSUBTITLEW";
    arr[1153] = "PSM_HWNDTOINDEX";
    arr[1154] = "PSM_INDEXTOHWND";
    arr[1155] = "MCIWNDM_SETINACTIVETIMER";
    arr[1155] = "PSM_PAGETOINDEX";
    arr[1156] = "PSM_INDEXTOPAGE";
    arr[1157] = "DL_BEGINDRAG";
    arr[1157] = "MCIWNDM_GETINACTIVETIMER";
    arr[1157] = "PSM_IDTOINDEX";
    arr[1158] = "DL_DRAGGING";
    arr[1158] = "PSM_INDEXTOID";
    arr[1159] = "DL_DROPPED";
    arr[1159] = "PSM_GETRESULT";
    arr[1160] = "DL_CANCELDRAG";
    arr[1160] = "PSM_RECALCPAGESIZES";
    arr[1164] = "MCIWNDM_GET_SOURCE";
    arr[1165] = "MCIWNDM_PUT_SOURCE";
    arr[1166] = "MCIWNDM_GET_DEST";
    arr[1167] = "MCIWNDM_PUT_DEST";
    arr[1168] = "MCIWNDM_CAN_PLAY";
    arr[1169] = "MCIWNDM_CAN_WINDOW";
    arr[1170] = "MCIWNDM_CAN_RECORD";
    arr[1171] = "MCIWNDM_CAN_SAVE";
    arr[1172] = "MCIWNDM_CAN_EJECT";
    arr[1173] = "MCIWNDM_CAN_CONFIG";
    arr[1174] = "IE_GETINK";
    arr[1174] = "IE_MSGFIRST";
    arr[1174] = "MCIWNDM_PALETTEKICK";
    arr[1175] = "IE_SETINK";
    arr[1176] = "IE_GETPENTIP";
    arr[1177] = "IE_SETPENTIP";
    arr[1178] = "IE_GETERASERTIP";
    arr[1179] = "IE_SETERASERTIP";
    arr[1180] = "IE_GETBKGND";
    arr[1181] = "IE_SETBKGND";
    arr[1182] = "IE_GETGRIDORIGIN";
    arr[1183] = "IE_SETGRIDORIGIN";
    arr[1184] = "IE_GETGRIDPEN";
    arr[1185] = "IE_SETGRIDPEN";
    arr[1186] = "IE_GETGRIDSIZE";
    arr[1187] = "IE_SETGRIDSIZE";
    arr[1188] = "IE_GETMODE";
    arr[1189] = "IE_SETMODE";
    arr[1190] = "IE_GETINKRECT";
    arr[1190] = "WM_CAP_SET_MCI_DEVICEW";
    arr[1191] = "WM_CAP_GET_MCI_DEVICEW";
    arr[1204] = "WM_CAP_PAL_OPENW";
    arr[1205] = "WM_CAP_PAL_SAVEW";
    arr[1208] = "IE_GETAPPDATA";
    arr[1209] = "IE_SETAPPDATA";
    arr[1210] = "IE_GETDRAWOPTS";
    arr[1211] = "IE_SETDRAWOPTS";
    arr[1212] = "IE_GETFORMAT";
    arr[1213] = "IE_SETFORMAT";
    arr[1214] = "IE_GETINKINPUT";
    arr[1215] = "IE_SETINKINPUT";
    arr[1216] = "IE_GETNOTIFY";
    arr[1217] = "IE_SETNOTIFY";
    arr[1218] = "IE_GETRECOG";
    arr[1219] = "IE_SETRECOG";
    arr[1220] = "IE_GETSECURITY";
    arr[1221] = "IE_SETSECURITY";
    arr[1222] = "IE_GETSEL";
    arr[1223] = "IE_SETSEL";
    arr[1224] = "CDM_LAST";
    arr[1224] = "EM_SETBIDIOPTIONS";
    arr[1224] = "IE_DOCOMMAND";
    arr[1224] = "MCIWNDM_NOTIFYMODE";
    arr[1225] = "EM_GETBIDIOPTIONS";
    arr[1225] = "IE_GETCOMMAND";
    arr[1226] = "EM_SETTYPOGRAPHYOPTIONS";
    arr[1226] = "IE_GETCOUNT";
    arr[1227] = "EM_GETTYPOGRAPHYOPTIONS";
    arr[1227] = "IE_GETGESTURE";
    arr[1227] = "MCIWNDM_NOTIFYMEDIA";
    arr[1228] = "EM_SETEDITSTYLE";
    arr[1228] = "IE_GETMENU";
    arr[1229] = "EM_GETEDITSTYLE";
    arr[1229] = "IE_GETPAINTDC";
    arr[1229] = "MCIWNDM_NOTIFYERROR";
    arr[1230] = "IE_GETPDEVENT";
    arr[1231] = "IE_GETSELCOUNT";
    arr[1232] = "IE_GETSELITEMS";
    arr[1233] = "IE_GETSTYLE";
    arr[1243] = "MCIWNDM_SETTIMEFORMATW";
    arr[1244] = "EM_OUTLINE";
    arr[1244] = "MCIWNDM_GETTIMEFORMATW";
    arr[1245] = "EM_GETSCROLLPOS";
    arr[1246] = "EM_SETSCROLLPOS";
    arr[1246] = "EM_SETSCROLLPOS";
    arr[1247] = "EM_SETFONTSIZE";
    arr[1248] = "EM_GETZOOM";
    arr[1248] = "MCIWNDM_GETFILENAMEW";
    arr[1249] = "EM_SETZOOM";
    arr[1249] = "MCIWNDM_GETDEVICEW";
    arr[1250] = "EM_GETVIEWKIND";
    arr[1251] = "EM_SETVIEWKIND";
    arr[1252] = "EM_GETPAGE";
    arr[1252] = "MCIWNDM_GETERRORW";
    arr[1253] = "EM_SETPAGE";
    arr[1254] = "EM_GETHYPHENATEINFO";
    arr[1255] = "EM_SETHYPHENATEINFO";
    arr[1259] = "EM_GETPAGEROTATE";
    arr[1260] = "EM_SETPAGEROTATE";
    arr[1261] = "EM_GETCTFMODEBIAS";
    arr[1262] = "EM_SETCTFMODEBIAS";
    arr[1264] = "EM_GETCTFOPENSTATUS";
    arr[1265] = "EM_SETCTFOPENSTATUS";
    arr[1266] = "EM_GETIMECOMPTEXT";
    arr[1267] = "EM_ISIME";
    arr[1268] = "EM_GETIMEPROPERTY";
    arr[1293] = "EM_GETQUERYRTFOBJ";
    arr[1294] = "EM_SETQUERYRTFOBJ";
    arr[1536] = "FM_GETFOCUS";
    arr[1537] = "FM_GETDRIVEINFOA";
    arr[1538] = "FM_GETSELCOUNT";
    arr[1539] = "FM_GETSELCOUNTLFN";
    arr[1540] = "FM_GETFILESELA";
    arr[1541] = "FM_GETFILESELLFNA";
    arr[1542] = "FM_REFRESH_WINDOWS";
    arr[1543] = "FM_RELOAD_EXTENSIONS";
    arr[1553] = "FM_GETDRIVEINFOW";
    arr[1556] = "FM_GETFILESELW";
    arr[1557] = "FM_GETFILESELLFNW";
    arr[1625] = "WLX_WM_SAS";
    arr[2024] = "SM_GETSELCOUNT";
    arr[2024] = "UM_GETSELCOUNT";
    arr[2024] = "WM_CPL_LAUNCH";
    arr[2025] = "SM_GETSERVERSELA";
    arr[2025] = "UM_GETUSERSELA";
    arr[2025] = "WM_CPL_LAUNCHED";
    arr[2026] = "SM_GETSERVERSELW";
    arr[2026] = "UM_GETUSERSELW";
    arr[2027] = "SM_GETCURFOCUSA";
    arr[2027] = "UM_GETGROUPSELA";
    arr[2028] = "SM_GETCURFOCUSW";
    arr[2028] = "UM_GETGROUPSELW";
    arr[2029] = "SM_GETOPTIONS";
    arr[2029] = "UM_GETCURFOCUSA";
    arr[2030] = "UM_GETCURFOCUSW";
    arr[2031] = "UM_GETOPTIONS";
    arr[2032] = "UM_GETOPTIONS2";
    arr[4096] = "LVM_FIRST";
    arr[4096] = "LVM_GETBKCOLOR";
    arr[4097] = "LVM_SETBKCOLOR";
    arr[4098] = "LVM_GETIMAGELIST";
    arr[4099] = "LVM_SETIMAGELIST";
    arr[4100] = "LVM_GETITEMCOUNT";
    arr[4101] = "LVM_GETITEMA";
    arr[4102] = "LVM_SETITEMA";
    arr[4103] = "LVM_INSERTITEMA";
    arr[4104] = "LVM_DELETEITEM";
    arr[4105] = "LVM_DELETEALLITEMS";
    arr[4106] = "LVM_GETCALLBACKMASK";
    arr[4107] = "LVM_SETCALLBACKMASK";
    arr[4108] = "LVM_GETNEXTITEM";
    arr[4109] = "LVM_FINDITEMA";
    arr[4110] = "LVM_GETITEMRECT";
    arr[4111] = "LVM_SETITEMPOSITION";
    arr[4112] = "LVM_GETITEMPOSITION";
    arr[4113] = "LVM_GETSTRINGWIDTHA";
    arr[4114] = "LVM_HITTEST";
    arr[4115] = "LVM_ENSUREVISIBLE";
    arr[4116] = "LVM_SCROLL";
    arr[4117] = "LVM_REDRAWITEMS";
    arr[4118] = "LVM_ARRANGE";
    arr[4119] = "LVM_EDITLABELA";
    arr[4120] = "LVM_GETEDITCONTROL";
    arr[4121] = "LVM_GETCOLUMNA";
    arr[4122] = "LVM_SETCOLUMNA";
    arr[4123] = "LVM_INSERTCOLUMNA";
    arr[4124] = "LVM_DELETECOLUMN";
    arr[4125] = "LVM_GETCOLUMNWIDTH";
    arr[4126] = "LVM_SETCOLUMNWIDTH";
    arr[4127] = "LVM_GETHEADER";
    arr[4129] = "LVM_CREATEDRAGIMAGE";
    arr[4130] = "LVM_GETVIEWRECT";
    arr[4131] = "LVM_GETTEXTCOLOR";
    arr[4132] = "LVM_SETTEXTCOLOR";
    arr[4133] = "LVM_GETTEXTBKCOLOR";
    arr[4134] = "LVM_SETTEXTBKCOLOR";
    arr[4135] = "LVM_GETTOPINDEX";
    arr[4136] = "LVM_GETCOUNTPERPAGE";
    arr[4137] = "LVM_GETORIGIN";
    arr[4138] = "LVM_UPDATE";
    arr[4139] = "LVM_SETITEMSTATE";
    arr[4140] = "LVM_GETITEMSTATE";
    arr[4141] = "LVM_GETITEMTEXTA";
    arr[4142] = "LVM_SETITEMTEXTA";
    arr[4143] = "LVM_SETITEMCOUNT";
    arr[4144] = "LVM_SORTITEMS";
    arr[4145] = "LVM_SETITEMPOSITION32";
    arr[4146] = "LVM_GETSELECTEDCOUNT";
    arr[4147] = "LVM_GETITEMSPACING";
    arr[4148] = "LVM_GETISEARCHSTRINGA";
    arr[4149] = "LVM_SETICONSPACING";
    arr[4150] = "LVM_SETEXTENDEDLISTVIEWSTYLE";
    arr[4151] = "LVM_GETEXTENDEDLISTVIEWSTYLE";
    arr[4152] = "LVM_GETSUBITEMRECT";
    arr[4153] = "LVM_SUBITEMHITTEST";
    arr[4154] = "LVM_SETCOLUMNORDERARRAY";
    arr[4155] = "LVM_GETCOLUMNORDERARRAY";
    arr[4156] = "LVM_SETHOTITEM";
    arr[4157] = "LVM_GETHOTITEM";
    arr[4158] = "LVM_SETHOTCURSOR";
    arr[4159] = "LVM_GETHOTCURSOR";
    arr[4160] = "LVM_APPROXIMATEVIEWRECT";
    arr[4161] = "LVM_SETWORKAREAS";
    arr[4162] = "LVM_GETSELECTIONMARK";
    arr[4163] = "LVM_SETSELECTIONMARK";
    arr[4164] = "LVM_SETBKIMAGEA";
    arr[4165] = "LVM_GETBKIMAGEA";
    arr[4166] = "LVM_GETWORKAREAS";
    arr[4167] = "LVM_SETHOVERTIME";
    arr[4168] = "LVM_GETHOVERTIME";
    arr[4169] = "LVM_GETNUMBEROFWORKAREAS";
    arr[4170] = "LVM_SETTOOLTIPS";
    arr[4171] = "LVM_GETITEMW";
    arr[4172] = "LVM_SETITEMW";
    arr[4173] = "LVM_INSERTITEMW";
    arr[4174] = "LVM_GETTOOLTIPS";
    arr[4179] = "LVM_FINDITEMW";
    arr[4183] = "LVM_GETSTRINGWIDTHW";
    arr[4191] = "LVM_GETCOLUMNW";
    arr[4192] = "LVM_SETCOLUMNW";
    arr[4193] = "LVM_INSERTCOLUMNW";
    arr[4211] = "LVM_GETITEMTEXTW";
    arr[4212] = "LVM_SETITEMTEXTW";
    arr[4213] = "LVM_GETISEARCHSTRINGW";
    arr[4214] = "LVM_EDITLABELW";
    arr[4235] = "LVM_GETBKIMAGEW";
    arr[4236] = "LVM_SETSELECTEDCOLUMN";
    arr[4237] = "LVM_SETTILEWIDTH";
    arr[4238] = "LVM_SETVIEW";
    arr[4239] = "LVM_GETVIEW";
    arr[4241] = "LVM_INSERTGROUP";
    arr[4243] = "LVM_SETGROUPINFO";
    arr[4245] = "LVM_GETGROUPINFO";
    arr[4246] = "LVM_REMOVEGROUP";
    arr[4247] = "LVM_MOVEGROUP";
    arr[4250] = "LVM_MOVEITEMTOGROUP";
    arr[4251] = "LVM_SETGROUPMETRICS";
    arr[4252] = "LVM_GETGROUPMETRICS";
    arr[4253] = "LVM_ENABLEGROUPVIEW";
    arr[4254] = "LVM_SORTGROUPS";
    arr[4255] = "LVM_INSERTGROUPSORTED";
    arr[4256] = "LVM_REMOVEALLGROUPS";
    arr[4257] = "LVM_HASGROUP";
    arr[4258] = "LVM_SETTILEVIEWINFO";
    arr[4259] = "LVM_GETTILEVIEWINFO";
    arr[4260] = "LVM_SETTILEINFO";
    arr[4261] = "LVM_GETTILEINFO";
    arr[4262] = "LVM_SETINSERTMARK";
    arr[4263] = "LVM_GETINSERTMARK";
    arr[4264] = "LVM_INSERTMARKHITTEST";
    arr[4265] = "LVM_GETINSERTMARKRECT";
    arr[4266] = "LVM_SETINSERTMARKCOLOR";
    arr[4267] = "LVM_GETINSERTMARKCOLOR";
    arr[4269] = "LVM_SETINFOTIP";
    arr[4270] = "LVM_GETSELECTEDCOLUMN";
    arr[4271] = "LVM_ISGROUPVIEWENABLED";
    arr[4272] = "LVM_GETOUTLINECOLOR";
    arr[4273] = "LVM_SETOUTLINECOLOR";
    arr[4275] = "LVM_CANCELEDITLABEL";
    arr[4276] = "LVM_MAPINDEXTOID";
    arr[4277] = "LVM_MAPIDTOINDEX";
    arr[4278] = "LVM_ISITEMVISIBLE";
    arr[8192] = "OCM__BASE";
    arr[8197] = "LVM_SETUNICODEFORMAT";
    arr[8198] = "LVM_GETUNICODEFORMAT";
    arr[8217] = "OCM_CTLCOLOR";
    arr[8235] = "OCM_DRAWITEM";
    arr[8236] = "OCM_MEASUREITEM";
    arr[8237] = "OCM_DELETEITEM";
    arr[8238] = "OCM_VKEYTOITEM";
    arr[8239] = "OCM_CHARTOITEM";
    arr[8249] = "OCM_COMPAREITEM";
    arr[8270] = "OCM_NOTIFY";
    arr[8465] = "OCM_COMMAND";
    arr[8468] = "OCM_HSCROLL";
    arr[8469] = "OCM_VSCROLL";
    arr[8498] = "OCM_CTLCOLORMSGBOX";
    arr[8499] = "OCM_CTLCOLOREDIT";
    arr[8500] = "OCM_CTLCOLORLISTBOX";
    arr[8501] = "OCM_CTLCOLORBTN";
    arr[8502] = "OCM_CTLCOLORDLG";
    arr[8503] = "OCM_CTLCOLORSCROLLBAR";
    arr[8504] = "OCM_CTLCOLORSTATIC";
    arr[8720] = "OCM_PARENTNOTIFY";
    arr[32768] = "WM_APP";
    arr[52429] = "WM_RASDIALEVENT";
    
    return arr;
}


let glMessagesNames = CreateMessagesNamesArray();


function GetMsgNameByNumber (msgNumber) {
    
    return glMessagesNames[msgNumber];
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
