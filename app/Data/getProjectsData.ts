
import fs from 'fs';
import path from 'path';
import slugify from 'slugify';

export interface ProjectInterface {
        id: number,
        title: string,
        url: string,
        source: string,
        summary: string,
        video: string,
        image: string,
        imageAlt: string,
        tags: string[],
        context: string,
        problem: string,
        solution: string,
        evolution: string,
}

export const getAllProjectsData = async () => {
  const filePath = path.join(process.cwd(), 'app/Data', 'projects.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const projectsData = JSON.parse(jsonData);
  return projectsData as Array<ProjectInterface>;
};


export const getProjectByTitle = async (title: string) => {
    const projectsData = await getAllProjectsData();
    return projectsData.find(project => slugify(project.title,{lower: true,strict: true, locale: "fr"}) === title);
};
