export class Dtnote {

    private judul: string;
    private isi  : string;
    private tgl  : string;
    private favorite : number;

    constructor(jdl,isi,tgl,fav){
        this.judul = jdl;
        this.isi = isi;
        this.tgl = tgl;
        this.favorite = fav;
    }

    public setJudul(jdl : string){
        this.judul = jdl;
    }
    public setIsi(isi : string){
        this.isi = isi;
    }
    public setTgl(tgl : string){
        this.tgl = tgl;
    }
    public setFav(fav : number){
        this.favorite = fav;
    }

    public getFav(){
        return this.favorite;
    }
    public getJudul(){
        return this.judul;
    }
    public getIsi(){
        return this.isi;
    }
    public getTgl(){
        return this.tgl;
    }
}
