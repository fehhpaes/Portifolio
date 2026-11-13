import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IExperience {
  role: string;
  company: string;
  period: string;
  location?: string;
  order: number;
  description: string[];
  skillsUsed?: string[];
}

export interface IProject {
  title: string;
  subtitle?: string;
  description: string;
  technologies: string[];
  link?: string;
  order: number;
}

export interface IEducation {
  institution: string;
  course: string;
  statusOrYear: string;
}

export interface ICertification {
  name: string;
  institution: string;
  year: string;
}

export interface ICurriculumData {
  slug: string; // 'desenvolvedor' | 'suporte' | 'administrativo'
  title: string; // Ex: Felipe Paes da Silva
  headline: string; // Ex: Desenvolvedor Full Stack
  customSummary: string; // Resumo adaptado ao perfil
  email: string;
  phone: string;
  location: string;
  portfolioUrl?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  experiences: IExperience[];
  projects?: IProject[];
  education: IEducation[];
  certifications?: ICertification[];
  coreSkills: string[];
  languages: string[];
}

export interface ICurriculum extends ICurriculumData, Document {}

const ExperienceSchema = new Schema<IExperience>({
  role: { type: String, required: true },
  company: { type: String, required: true },
  period: { type: String, required: true },
  location: { type: String },
  order: { type: Number, default: 0 },
  description: [{ type: String, required: true }],
  skillsUsed: [{ type: String }],
});

const ProjectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  subtitle: { type: String },
  description: { type: String, required: true },
  technologies: [{ type: String }],
  link: { type: String },
  order: { type: Number, default: 0 },
});

const EducationSchema = new Schema<IEducation>({
  institution: { type: String, required: true },
  course: { type: String, required: true },
  statusOrYear: { type: String, required: true },
});

const CertificationSchema = new Schema<ICertification>({
  name: { type: String, required: true },
  institution: { type: String, required: true },
  year: { type: String, required: true },
});

const CurriculumSchema = new Schema<ICurriculum>(
  {
    slug: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    headline: { type: String, required: true },
    customSummary: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    location: { type: String, required: true },
    portfolioUrl: { type: String },
    linkedinUrl: { type: String },
    githubUrl: { type: String },
    experiences: [ExperienceSchema],
    projects: [ProjectSchema],
    education: [EducationSchema],
    certifications: [CertificationSchema],
    coreSkills: [{ type: String }],
    languages: [{ type: String }],
  },
  { timestamps: true }
);

export const Curriculum: Model<ICurriculum> =
  mongoose.models.Curriculum || mongoose.model<ICurriculum>('Curriculum', CurriculumSchema);

