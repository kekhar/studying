class clMap {
    private buckets: Array<Bucket>;
    private bucketSize: number;
  
    constructor(bucketSize: number = 16) {
      this.bucketSize = bucketSize;
      this.buckets = new Array<Bucket>(this.bucketSize);
    }
  
    private hash(key: string): number {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash << 5) - hash + key.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
      }
      return hash;
    }
  
    private getBucketIndex(key: string): number {
      const hash = this.hash(key);
      return Math.abs(hash) % this.bucketSize;
    }
  
    set(key: string, value: number): void {
      const bucketIndex = this.getBucketIndex(key);
      if (!this.buckets[bucketIndex]) {
        this.buckets[bucketIndex] = new Bucket();
      }
      this.buckets[bucketIndex].add(key, value);
    }
  
    get(key: string): number | undefined {
      const bucketIndex = this.getBucketIndex(key);
      const bucket = this.buckets[bucketIndex];
      return bucket ? bucket.get(key) : undefined;
    }
  
    delete(key: string): boolean {
      const bucketIndex = this.getBucketIndex(key);
      const bucket = this.buckets[bucketIndex];
      return bucket ? bucket.remove(key) : false;
    }
  
    clear(): void {
      this.buckets = new Array<Bucket>(this.bucketSize);
    }
  }
  
  class Bucket {
    private items: Array<{ key: string; value: number }>;
  
    constructor() {
      this.items = [];
    }
  
    add(key: string, value: number): void {
      for (let item of this.items) {
        if (item.key === key) {
          item.value = value;
          return;
        }
      }
      this.items.push({ key, value });
    }
  
    get(key: string): number | undefined {
      for (let item of this.items) {
        if (item.key === key) {
          return item.value;
        }
      }
      return undefined;
    }
  
    remove(key: string): boolean {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].key === key) {
          this.items.splice(i, 1);
          return true;
        }
      }
      return false;
    }
  }
  
  // Пример использования
  let weatherMap = new clMap();
  weatherMap.set('London', 20);
  weatherMap.set('Berlin', 25);
  console.log(weatherMap.get('London')); // Выведет 20
  console.log(weatherMap.get('Berlin')); // Выведет 25
  weatherMap.delete('London');
  console.log(weatherMap.get('London')); // Выведет undefined
  weatherMap.clear();
  console.log(weatherMap.get('Berlin')); // Выведет undefined
  