import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tarefa } from './tarefa.entity';

@Injectable()
export class TarefaService {

    constructor(
        @InjectRepository(Tarefa)
        private readonly tarefaRepository: Repository<Tarefa>
    ) {}

    async findAll(): Promise<Tarefa[]> {
        return await this.tarefaRepository.find();
    }

    async findById(codigo: number): Promise<Tarefa> {
        return await this.tarefaRepository.findOneBy({ codigo });
    }

    async salvar(tarefa: Tarefa) {
        await this.tarefaRepository.save(tarefa);
    }

    async excluir(codigo: number) {
        await this.tarefaRepository.delete(codigo);
    }
}