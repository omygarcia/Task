import { Controller,Get,Post,Body, Delete, Param, Patch } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Controller('task')
export class TaskController {

    constructor(
        private taskServ:TaskService
    ){

    }

    @Get()
    getAllTask()
    {
        return this.taskServ.getAllTask();
    }

    @Post()
    createTask(@Body() newTask:CreateTaskDto)
    {
        //console.log(newTask);
        //return 'guardando';
        return this.taskServ.createTask(newTask.title,newTask.description);
    }

    @Delete(':id')
    deleteTask(@Param('id') id)
    {
        this.taskServ.deleteTask(id);
    }

    @Patch(":id")
    updateTask(@Param("id") id:string,@Body() updatedTask:UpdateTaskDto)
    {
        return this.taskServ.updateTask(id,updatedTask);
    }
    
}
