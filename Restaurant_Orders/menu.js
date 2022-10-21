
class Menu
{
    constructor(id, vorspeise, hauptspeise, nachtisch)
    {
        this.id = id;
        this.vorspeise = vorspeise;
        this.hauptspeise = hauptspeise;
        this.nachtisch = nachtisch;
    }

    getMenuSeparated()
    {
        return this.id + ";" + this.vorspeise + ";"
            + this.hauptspeise + ";" + this.nachtisch;
    }
    
}
