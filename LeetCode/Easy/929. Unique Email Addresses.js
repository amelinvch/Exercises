/**
 * https://leetcode.com/problems/unique-email-addresses/
 * @param {string[]} emails
 * @return {number}
*/

var numUniqueEmails = function(emails) {
  const uniqEmail = new Set();
  const dot = ['.'];
  emails.forEach(elem => {
    let localName = elem.split('@')[0];
    localName = localName.includes('+') ? localName.split('+')[0] : localName;
    const domainName = elem.split('@')[1];
    uniqEmail.add(localName.split('').filter(elem => !dot.includes(elem)).join('') + '@' + domainName);
  });
  return uniqEmail.size;
};

console.log(numUniqueEmails( ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"] )); // 2
console.log(numUniqueEmails( ["a@leetcode.com","b@leetcode.com","c@leetcode.com"] )); //3