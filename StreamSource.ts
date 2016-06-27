/// <reference path="typings/index.d.ts" />

export enum StreamType {
    RTSP = 1,
    file
}

export class Stream {
    protected _type: StreamType;
    public get streamType(): StreamType { return this._type; }
    protected _name: string;
    public get name(): string { return this._name; }
    protected _url: string;
    public get url(): string { return this._url; }
};

export abstract class StreamSource {
    public abstract name(): string;
    public abstract defer(): Promise<Stream[]>;
};

