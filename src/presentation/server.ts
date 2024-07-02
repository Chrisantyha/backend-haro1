import express from 'express'

interface Options {
    port: number;
}

export class Server{
    private port: number;
    cosntructor (options: Options){
        this.port = options.port;
    }
}

