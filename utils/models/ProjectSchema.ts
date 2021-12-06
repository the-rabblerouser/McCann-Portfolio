import mongoose, { Schema } from 'mongoose';

export interface ProjectTypes {
	title: String;
	description: String;
	tools: String;
	repository: String;
	site: String;
}

const ProjectSchema = new Schema<ProjectTypes>({
	title: String,
	description: String,
	tools: String,
	repository: String,
	site: String,
});

export default mongoose.models.Projects ||
	mongoose.model('Projects', ProjectSchema);
