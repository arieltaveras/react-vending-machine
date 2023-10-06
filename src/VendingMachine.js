import React from "react";
import "./VendingMachine.css"

function VendingMachine() {
  return (
    <div className="VendingMachine">
      <h1>HELLO I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT</h1>
      <img className="VendingMachineImg"
        src="https://images.unsplash.com/photo-1575224526797-5730d09d781d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVuZGluZyUyMG1hY2hpbmVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=1600&q=60"
        alt="Vending machine"
      />
    </div>
  );
}

export default VendingMachine;
