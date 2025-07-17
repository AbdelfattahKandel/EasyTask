
import { Task } from './model/task.model';

export const dummyTasks: Task[] = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  },
  {
    id: 't4',
    userId: 'u2',
    title: 'Design logo',
    summary: 'Create a new logo for the project branding.',
    dueDate: '2024-08-01',
  },
  {
    id: 't5',
    userId: 'u5',
    title: 'Write documentation',
    summary: 'Document all API endpoints and usage examples.',
    dueDate: '2024-09-15',
  },
  {
    id: 't6',
    userId: 'u4',
    title: 'Setup CI/CD',
    summary: 'Configure continuous integration and deployment pipelines.',
    dueDate: '2024-10-10',
  },
  {
    id: 't7',
    userId: 'u6',
    title: 'Start learning TypeScript',
    summary: 'Begin with TypeScript basics and best practices.',
    dueDate: '2024-11-01',
  },
]