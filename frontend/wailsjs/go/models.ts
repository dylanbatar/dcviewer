export namespace domain {
	
	
	export class DcViewerCompose {
	    name: string;
	    description: string;
	    image: string;
	    createAt: string;
	    updateAt: string;
	
	    static createFrom(source: any = {}) {
	        return new DcViewerCompose(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.name = source["name"];
	        this.description = source["description"];
	        this.image = source["image"];
	        this.createAt = source["createAt"];
	        this.updateAt = source["updateAt"];
	    }
	}

}

