import { jsPDF } from 'jspdf';
import { PERSONAL_INFO, SKILL_CATEGORIES, EXPERIENCES, FEATURED_PROJECTS } from '../data/portfolioData';

export const downloadResumePDF = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();

  // Header Banner
  doc.setFillColor(9, 11, 16);
  doc.rect(0, 0, pageWidth, 35, 'F');

  // Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(255, 255, 255);
  doc.text(PERSONAL_INFO.name, 14, 18);

  // Subtitle
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(6, 182, 212);
  doc.text(PERSONAL_INFO.title, 14, 26);

  // Contact Info bar
  doc.setFontSize(8.5);
  doc.setTextColor(148, 163, 184);
  doc.text(`Email: ${PERSONAL_INFO.contact.email} | Phone: ${PERSONAL_INFO.contact.phone} | ${PERSONAL_INFO.contact.location}`, 14, 32);

  let y = 45;

  // Profile Summary
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text('PROFILE SUMMARY', 14, y);
  doc.setLineWidth(0.5);
  doc.setDrawColor(6, 182, 212);
  doc.line(14, y + 2, pageWidth - 14, y + 2);
  y += 8;

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(51, 65, 85);
  const summaryLines = doc.splitTextToSize(PERSONAL_INFO.heroDescription, pageWidth - 28);
  doc.text(summaryLines, 14, y);
  y += summaryLines.length * 4.5 + 6;

  // Education
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text('EDUCATION', 14, y);
  doc.line(14, y + 2, pageWidth - 14, y + 2);
  y += 8;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(30, 41, 59);
  doc.text(`${PERSONAL_INFO.education.degree} in ${PERSONAL_INFO.education.field}`, 14, y);
  doc.setFont('helvetica', 'normal');
  doc.text(PERSONAL_INFO.education.period, pageWidth - 14, y, { align: 'right' });
  y += 5;
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  doc.text(PERSONAL_INFO.education.college, 14, y);
  y += 10;

  // Experience
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text('INTERNSHIP EXPERIENCE', 14, y);
  doc.line(14, y + 2, pageWidth - 14, y + 2);
  y += 8;

  EXPERIENCES.forEach((exp) => {
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(30, 41, 59);
    doc.text(`${exp.role} - ${exp.company}`, 14, y);
    doc.setFont('helvetica', 'normal');
    doc.text(exp.duration, pageWidth - 14, y, { align: 'right' });
    y += 5;

    doc.setFontSize(8.5);
    doc.setTextColor(71, 85, 105);
    exp.responsibilities.forEach((resp) => {
      doc.text(`• ${resp}`, 18, y);
      y += 4;
    });
    y += 4;
  });

  // Projects
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text('FEATURED PROJECTS', 14, y);
  doc.line(14, y + 2, pageWidth - 14, y + 2);
  y += 8;

  FEATURED_PROJECTS.forEach((proj) => {
    doc.setFontSize(9.5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(30, 41, 59);
    doc.text(proj.title, 14, y);
    y += 4;

    doc.setFontSize(8.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    const projDescLines = doc.splitTextToSize(proj.description, pageWidth - 28);
    doc.text(projDescLines, 14, y);
    y += projDescLines.length * 4;

    doc.setTextColor(6, 182, 212);
    doc.text(`Tech: ${proj.tags.join(', ')}`, 14, y);
    y += 6;
  });

  // Skills
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text('TECHNICAL SKILLS', 14, y);
  doc.line(14, y + 2, pageWidth - 14, y + 2);
  y += 8;

  SKILL_CATEGORIES.forEach((cat) => {
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(30, 41, 59);
    doc.text(`${cat.title}:`, 14, y);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    const skillList = cat.skills.map((s) => s.name).join(', ');
    doc.text(skillList, 65, y);
    y += 5;
  });

  // Save File
  doc.save('Kiruthikeyan_S_Resume.pdf');
};
