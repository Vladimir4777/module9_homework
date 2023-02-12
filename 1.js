const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

let student = xmlDOM.querySelectorAll('student');
let list = [];
let result = {};

for(let elem of student){
    let studentObj = {
        name: `${elem.querySelector('first').textContent} ${elem.querySelector('second').textContent}`,
        age: `${elem.querySelector('age').textContent}`,
        prof: `${elem.querySelector('prof').textContent}`,
        lang: `${elem.querySelector('name').getAttribute('lang')}`
    }
    list.push(studentObj);
}
result['list'] = list;
console.log(result)

