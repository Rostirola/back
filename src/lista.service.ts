import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lista } from './lista.entity';

@Injectable()
export class ListaService {

    constructor(
        @InjectRepository(Lista)
        private readonly listaRepository: Repository<Lista>
    ) {}

    async findAll(): Promise<Lista[]> {
        return await this.listaRepository.find();
    }

    async findById(codigo: number): Promise<Lista> {
        return await this.listaRepository.findOneBy({ codigo });
    }

    async salvar(lista: Lista) {
        await this.listaRepository.save(lista);
    }

    async excluir(codigo: number) {
        await this.listaRepository.delete(codigo);
    }
}