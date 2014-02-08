var genders = ['male', 'female'];
var sections = {
  body: 'body/{{ gender }}/',
  ears: 'body/{{ gender }}/ears',
  eyes: 'body/{{ gender }}/eyes',
  nose: 'body/{{ gender }}/nose',

  hairstyle: 'hair/{{ gender }}',
  haircolor: 'hair/{{ gender }}/{{ hairstyle }}',

  belt: [
    'belt/cloth/{{ gender }}',
    'belt/leather/{{ gender }}',
    'belt/metal/{{ gender }}'
  ],

  hands: [
    'hands/bracelets',
    'hands/braces/{{ gender }}',
    'hands/gloves/{{ gender }}'
  ],

  legs: [
    'legs/armor/{{ gender }}',
    'legs/pants/{{ gender }}',
    'legs/skirt/{{ gender }}'
  ]

  feet: [
    'feet/armor/{{ gender }}',
    'feet/shoes/{{ gender }}'
  ]
};