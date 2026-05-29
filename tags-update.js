const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.md')) {
      let tag = "Security";
      if (file.includes("iam")) tag = "IAM";
      else if (file.includes("risk")) tag = "Risk";
      else if (file.includes("cissp")) tag = "Certification";
      else if (file.includes("vibe")) tag = "Development";
      else if (file.includes("devsecops")) tag = "DevSecOps";

      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Match the block between the first two '---'
      let matchCount = 0;
      let newContent = content.replace(/^---\r?\n/gm, (match) => {
        matchCount++;
        if (matchCount === 2) {
          return `tags: ["${tag}"]\n---\n`;
        }
        return match;
      });
      
      fs.writeFileSync(fullPath, newContent, 'utf8');
    }
  }
}

processDir('c:\\Users\\ASaac\\Documents\\personal-site-2\\content');
console.log("Done");
