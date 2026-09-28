import { Hand, Settings, FilePlus2, CircleDollarSign, ClipboardList, Search, FileCode2, CircleCheck, FileText, Award, Timer, RotateCcw, ChartColumnIncreasing, Syringe, Wind, HeartPulse, Activity, Pill, Plus, Brain, Zap, Baby, Heart, Dna, ShieldPlus, ScanLine, Radiation, Bone, Sparkles, Droplets, FlaskConical, Eye, Glasses, Stethoscope, Droplet } from 'lucide-react'
export const brand = { name: 'MedRevu', phone: '(555) 010-0142', email: 'hello@medrevu.example', address: '100 Main Street, Dallas, Texas 75201' }
const s = (slug, title, [icon, accent], short) => ({ slug, title, icon, accent, short })
export const services = [
  s('denial-management', 'Denial Management', [Hand, Settings], 'Find the root cause of rejections, appeal fast, and stop repeat denials.'),
  s('medical-billing', 'Medical Billing', [FilePlus2, CircleDollarSign], 'Clean claims out the door in 24 hours with payer-specific scrubbing.'),
  s('medical-billing-audit', 'Medical Billing Audit', [ClipboardList, Search], 'A line-by-line review that exposes underpayments and compliance gaps.'),
  s('medical-coding', 'Medical Coding', [FileCode2, CircleCheck], 'Certified coders assign accurate ICD-10, CPT and HCPCS codes.'),
  s('medical-credentialing', 'Medical Credentialing', [FileText, Award], 'Enrollment and re-credentialing handled from application to approval.'),
  s('old-ar-recovery', 'Old AR Recovery', [Timer, RotateCcw], 'We chase aged receivables that in-house teams have written off.'),
  s('revenue-cycle-management', 'Revenue Cycle Management', [ChartColumnIncreasing, Settings], 'One accountable team for every step from scheduling to final payment.'),
]
export const specialties = [
  s('anesthesiology', 'Anesthesiology', [Syringe, Wind], 'Time-unit, modifier and ASA-crosswalk expertise.'),
  s('cardiology', 'Cardiology', [HeartPulse, Activity], 'Accurate coding for procedures, imaging and in-office diagnostics.'),
  s('gastroenterology', 'Gastroenterology', [Pill, Plus], 'Screening versus diagnostic colonoscopy rules, done right.'),
  s('neurology', 'Neurology', [Brain, Zap], 'EEG, EMG and infusion billing with strict documentation checks.'),
  s('ob-gyn', 'OB/GYN', [Baby, Heart], 'Global maternity packages and split-billing handled cleanly.'),
  s('oncology', 'Oncology', [Dna, ShieldPlus], 'Drug-based billing, J-codes and prior authorization tracking.'),
  s('radiology', 'Radiology', [ScanLine, Radiation], 'Professional and technical component split with modifier accuracy.'),
  s('orthopedics', 'Orthopedics', [Bone, Plus], 'Global periods, DME and multiple-procedure reductions.'),
  s('dermatology', 'Dermatology', [Hand, Sparkles], 'Medical versus cosmetic separation and biopsy coding.'),
  s('urology', 'Urology', [Droplets, FlaskConical], 'Office procedure, lab and surgical billing support.'),
  s('ophthalmology', 'Ophthalmology', [Eye, Glasses], 'Exam, imaging and surgical coding with LCD awareness.'),
  s('nephrology', 'Nephrology', [Stethoscope, Droplet], 'Dialysis and monthly capitation billing expertise.'),
]
export const stats = [['< 30', 'Days in AR'], ['10-15%', 'Revenue increase'], ['97%', 'First pass ratio'], ['96%', 'Collection ratio'], ['98%', 'Clean claims rate']]
const b = (title, cat, date) => ({ title, cat, date, slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '') })
export const blogs = [
  b('Revenue Cycle Metrics Every Practice Should Track', 'Practice Guides', '2026-09-24'),
  b('Payer Credentialing and Enrollment Walkthrough', 'Credentialing Guides', '2026-09-23'),
  b('Enrolling With a New Health Plan: Step by Step', 'Credentialing Guides', '2026-09-22'),
  b('Community Health Center Revenue Cycle Checklist', 'Practice Guides', '2026-09-18'),
  b('A Plain-English Guide to CPT Code 99205', 'CPT Codes', '2026-09-16'),
  b('DME Revenue Cycle Guidelines for 2026', 'Practice Guides', '2026-09-15'),
  b('Reading CPT Code 65820 Without the Headache', 'CPT Codes', '2026-09-14'),
  b('Provider Re-credentialing: A Complete Guide', 'Practice Guides', '2026-09-11'),
  b('What Is Medicare Secondary Payer?', 'Billing & Coding Guides', '2026-09-10'),
  b('Nephrology Revenue Cycle Guidelines', 'Practice Guides', '2026-09-08'),
  b('Ophthalmology Revenue Cycle Guidelines', 'Practice Guides', '2026-09-04'),
  b('Dermatology Billing and Coding Guidelines', 'Billing & Coding Guides', '2026-09-01'),
]
export const faqs = [['When do commissions begin?', 'Commissions start the month after your referred client sends their first paid invoice.'], ['How is my tier determined?', 'Tiers follow the client’s monthly collections at signup: small, growth, or enterprise.'], ['Do I earn on future upsells?', 'Yes. Added services for a referred client extend your recurring commission.'], ['Is there exclusivity?', 'No. You can refer to other partners and keep your independence.'], ['When are payments made?', 'Payouts go out monthly by ACH or wire once client invoices clear.']]
export const testimonials = [['Our denial rate fell within one quarter, and our front desk finally has time for patients.', 'Dr. A. Rahman', 'Cardiology practice'], ['Weekly reports are clear, and every question gets a same-day answer.', 'M. Ellis', 'Practice manager, OB/GYN'], ['They recovered aged claims we had already written off. That alone paid for the year.', 'Dr. K. Novak', 'Orthopedic group']]
export const clients = ['Northgate Family Care', 'Willow OB/GYN', 'Harbor Research Clinic', 'Summit Spine & Sport', 'Primary Med Group', 'Cedar Clinic', 'Regent Health']
export const certs = ['HIPAA Compliant', 'ISO 9001 Process', 'Certified Coders', 'Revenue Cycle Certified', 'Credentialing Specialists', 'Secure Cloud Workflow']
