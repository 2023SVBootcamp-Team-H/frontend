import friend from '@/assets/images/category/friend.png';
import grandma from '@/assets/images/category/grandma.png';
import parents from '@/assets/images/category/parents.png';
import teacher from '@/assets/images/category/teacher.png';
import youngboy from '@/assets/images/category/youngboy.png';

class Character {
  name: string;

  image: string;

  constructor(name: string, image: string) {
    this.name = name;
    this.image = image;
  }
}

const AllCharacter = [
  new Character('친구', friend),
  new Character('할머니', grandma),
  new Character('부모님', parents),
  new Character('선생님', teacher),
  new Character('중2', youngboy),
];

export default AllCharacter;
