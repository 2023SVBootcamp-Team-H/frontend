import friendF from '@/assets/images/character/friendF_on.png';
import friendT from '@/assets/images/character/friendT_on.png';
import gradeTwo from '@/assets/images/character/gradeTwo_on.png';
import grandma from '@/assets/images/character/grandma_on.png';
import rapper from '@/assets/images/character/rapper_on.png';

class Character {
  name: string;

  image: string;

  constructor(name: string, image: string) {
    this.name = name;
    this.image = image;
  }
}

const AllCharacter = [
  new Character('맑눈광', friendF),
  new Character('할머니', grandma),
  new Character('친구', friendT),
  new Character('래퍼', rapper),
  new Character('중2병', gradeTwo),
];

export default AllCharacter;
