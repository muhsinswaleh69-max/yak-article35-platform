import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from "docx";

export async function generateMemoDocx(data: any) {
  const doc = new Document({
    sections: [{
      children: [
        new Paragraph({ text: "YOUTH ALIVE! KENYA", heading: HeadingLevel.HEADING_1, alignment: AlignmentType.CENTER }),
        new Paragraph({ text: "MEMORANDUM UNDER ARTICLE 35 OF THE CONSTITUTION", alignment: AlignmentType.CENTER }),
        new Paragraph({ text: `Event: ${data.eventTitle} | County: ${data.county}`, spacing: { after: 200 } }),
        new Paragraph({ text: `Submitted by: ${data.name} | Phone: ${data.phone}`, spacing: { after: 400 } }),
        new Paragraph({ text: "1. What is good about this Bill?", heading: HeadingLevel.HEADING_3 }),
        new Paragraph({ children: [new TextRun(data.q1)] }),
        new Paragraph({ text: "2. What should be changed?", heading: HeadingLevel.HEADING_3 }),
        new Paragraph({ children: [new TextRun(data.q2)] }),
        new Paragraph({ text: "3. What is missing?", heading: HeadingLevel.HEADING_3 }),
        new Paragraph({ children: [new TextRun(data.q3)] }),
      ]
    }]
  });
  return await Packer.toBlob(doc);
}
