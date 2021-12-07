import mongoose, { Schema } from 'mongoose';
import { ProjectTypes } from '../../components/Projects/types/projectTypes';

const ProjectSchema = new Schema<ProjectTypes>({
	title: String,
	description: String,
	tools: String,
	repository: String,
	site: String,
	image: String,
});

export default mongoose.models.Projects ||
	mongoose.model('Projects', ProjectSchema);
