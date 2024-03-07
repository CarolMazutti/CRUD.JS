import { randomUUID } from "node:crypto"

export class DatabaseMemory{
    #videos = new Map()

    list() {
        return this.#videos.values()
    }
    
    create(videos) {
        const videoId = randomUUID //Sempre vai retornar um ID unico
        // Universal Unique ID
        this.#videos.set(videoId, videos)
    }

    update(id, videos) {
        this.#videos.set(id, videos)
    }

    delete(id) {
        this.#videos.delete(id)
    }
}