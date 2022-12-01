import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'lista' })
export class Lista {

    @PrimaryGeneratedColumn({name: 'codigo'})
    codigo?: number;

    @Column ({name: 'descricao', type: 'varchar', length: 100})
    descricao?: string;

    @Column ({name: 'link', type: 'varchar', length: 100})
    link?: string;
}