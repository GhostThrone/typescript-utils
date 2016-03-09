import { IDictionary, IBasic, IUniversal } from './interfaces'

export class Dictionary<K, V> implements IDictionary<K, V>, IUniversal
{
	//Attributes
	private items: { [index: number]: IBasic<K, V> };
	private counter: number;
	private indices: Array<number>;

	//Constructor
	constructor()
	{
		this.items = {};
		this.counter = 0;
		this.indices = new Array<number>();
	}

	//Methods
	public add(k: K, v: V): void
	{
		//Add new item to Dictionary
		this.items[this.counter] = { key: k, value: v };
		this.indices.push(this.counter);
		this.counter++;
	}

	public getItem(index: number): IBasic<K, V>
	{
		//Return a item from Dictionary if this do not exist return the first item
		let x: number = 0;
		for (let i = 0; i < this.indices.length; i++) 
		{
			if (this.indices[i] == index)
			{
				x = 1;
				break;
			}

				
		}

		return (x == 1) ? this.items[index] : this.items[0];
	}

	public hasItem(item: K | V): boolean
	{
		//Return true if find item else return false
		let x: number = 0;
		for (let i = 0; i < this.len; i++)
		{
			if(this.items[i].key === item || this.items[i].value === item)
			{
				x = 1;
				break;
			}
		}

		return (x == 1) ? true : false;
	}

	public get len() : number {
		//Rerturn length of Dictionary
		return this.counter;
	}

	public indexOf(item: K | V): number
	{
		//Return index of any item if this is not find return -1
		let x: number = 0;
		for (let i = 0; i < this.len; i++)
		{
			if(this.items[i].key === item || this.items[i].value === item)
			{
				x = i;
				break;
			}
		}

		return (x != 0) ? x : -1;
	}
}