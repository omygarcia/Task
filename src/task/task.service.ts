import { Injectable } from '@nestjs/common';
import { Task,TaskStatus } from './task.entity';
import {v4} from 'uuid';
import { UpdateTaskDto } from './dto/task.dto';

@Injectable()
export class TaskService {
    private tasks:Task[] = [{
        id:'1',
        title:'First task',
        description:'some task',
        status:TaskStatus.PENDING
    }];

    getAllTask(){
        return this.tasks;
    }

    createTask(title:string,description:string){
        const task = {
            id:v4(),
            title,
            description,
            status:TaskStatus.PENDING
        }
        this.tasks.push(task);

        return task;
    }

    getTaskById(id:string):Task
    {
        return this.tasks.find(task=>task.id === id);
    }

    updateTask(id:string, updatedFields:UpdateTaskDto):Task{
        const task = this.getTaskById(id);
        const newTaks = Object.assign(task,updatedFields);
        this.tasks = this.tasks.map(task => task.id === id ? newTaks:task);
        return newTaks;
    }

    deleteTask(id:string){
        this.tasks = this.tasks.filter(x=>x.id!==id);
    }
}
