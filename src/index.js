import "./styles.css";

/*
--- Day 6: Tuning Trouble ---

The device will send your subroutine a datastream buffer (your puzzle input); your subroutine needs to identify the first position where the four most recently received characters were all different. Specifically, it needs to report the number of characters from the beginning of the buffer to the end of the first such four-character marker.

For example, suppose you receive the following datastream buffer:

mjqjpqmgbljsphdztnvjfqwrcgsmlb
After the first three characters (mjq) have been received, there haven't been enough characters received yet to find the marker. The first time a marker could occur is after the fourth character is received, making the most recent four characters mjqj. Because j is repeated, this isn't a marker.

The first time a marker appears is after the seventh character arrives. Once it does, the last four characters received are jpqm, which are all different. In this case, your subroutine should report the value 7, because the first start-of-packet marker is complete after 7 characters have been processed.

Here are a few more examples:

bvwbjplbgvbhsrlpgdmjqwftvncz: first marker after character 5
nppdvjthqldpwncqszvftbrmjlhg: first marker after character 6
nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg: first marker after character 10
zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw: first marker after character 11
How many characters need to be processed before the first start-of-packet marker is detected?
part 1
Your puzzle answer was 1929
part 2
Your puzzle answer was 3298

necesita, evaluar el numero de caracteres 
evaluados
un loop que recorre los caracteres de
uno en uno evalaudo si desde cual se 
forma el primer llamdo donde no se repite
ninguno
n + 4
*/
//

const func = () => {
  const inputValue = document.getElementById("value").value.trim();
  let marker = 0;
  for (let i = 0; i < inputValue.length; i++) {
    const evaluateMarker = inputValue.slice(i, i + 14);
    const nonRepeatedMarker = new Set(evaluateMarker);

    if (evaluateMarker.length === nonRepeatedMarker.size) {
      marker = i + 14;
      return marker;
    }
  }
};

console.log(func());

//first part solution
// uses 4 instead the 14 for the slice method in the for loop
/*

const func = () => {
  const inputValue = document.getElementById("value").value.trim();
  let marker = 0
  for(let i = 0; i < inputValue.length; i++){
    const evaluateMarker = inputValue.slice(i, i+4)
    const nonRepeatedMarker = new Set(evaluateMarker)

    if(evaluateMarker.length === nonRepeatedMarker.size){
      marker = i + 4
      return marker
    }
  }

};

*/
