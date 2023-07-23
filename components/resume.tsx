'use client'

const pr = function printDiv() {
  //   var divContents = document.getElementById("GFG").innerHTML;
  let divContents = "Hello";
  var a: any = window;

  a.document.write("<html>");
  a.document.write("<body > <h1>Div contents are <br>");
  a.document.write(divContents);
  a.document.write("</body></html>");
  a.document.close();
  a.print();
};
const Resume = ()=>{
    return <button onClick={pr}>click for print</button>
}
export default Resume;