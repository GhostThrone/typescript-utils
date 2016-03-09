export interface IUniversal
{
	len: number;
}

export interface IBasic<K, V>
{
	key: K;
	value: V;
}

export interface IDictionary<K, V>
{
	add(k: K, v: V): void;
	getItem(index: number): IBasic<K, V>;
	hasItem(item: K | V): boolean;
	indexOf(item: K | V): number;
}