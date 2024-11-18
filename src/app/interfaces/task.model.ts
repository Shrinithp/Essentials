export interface Task {
    id: string;
    userId: string;
    summary: string;
    dueDate: string;
    title: string;
   }

export interface NewTask {
summary: string;
title: string;
dueDate: string;
}