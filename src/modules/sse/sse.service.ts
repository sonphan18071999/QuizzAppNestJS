import { Injectable } from '@nestjs/common';
import { Subject } from 'rxjs';

@Injectable()
export class SseService {
    private clients: Map<string, Subject<any>> = new Map();

    /**
     * Register a client for SSE.
     * @param id - The unique identifier for the client.
     * @returns Subject to push events to the client.
     */
    public registerClient(id: string): Subject<any> {
        const subject = new Subject<any>();
        this.clients.set(id, subject);
        return subject;
    }

    /**
     * Unregister a client for SSE.
     * @param id - The unique identifier for the client.
     */
    public unregisterClient(id: string): void {
        const client = this.clients.get(id);
        if (client) {
            client.complete();
            this.clients.delete(id);
        }
    }

    /**
     * Send an event to a specific client.
     * @param id - The client's ID.
     * @param data - The event data to send.
     */
    public sendToClient(id: string, data: any): void {
        const client = this.clients.get(id);
        if (client) {
            client.next(data);
        }
    }

    /**
     * Broadcast an event to all connected clients.
     * @param data - The event data to send.
     */
    public broadcast(data: any): void {
        this.clients.forEach((subject) => subject.next(data));
    }
}
