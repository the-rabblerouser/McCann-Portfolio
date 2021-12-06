import type { NextApiRequest, NextApiResponse } from 'next';

import dbConnect from '../../utils/mongodb';
import Project from '../../utils/models/ProjectSchema';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;

	if (method === 'GET') {
		await dbConnect();

		try {
			const projects: {} = await Project.find({});
			res.json(projects);
		} catch (error) {
			res.status(400).json({ success: false });
		}
	}
};
