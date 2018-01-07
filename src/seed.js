window.Seed = (function () {
  const blockchain = [
    {
      index: 1,
      previous_hash: null,
      hash: 'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad',
      data: {
        'proof-of-work': 42,
        transactions: [
          {
            from: '88561a75d1f047f8afa4630c43d82a9e6b08632117f90a8f18091963c9f9ee0b',
            to: '098057fbf586fd939a034da9b1175b2f06cb2b261c4879246688647d699ddde8',
            amount: Math.random() * 100,
            fee: Math.random(),
            timestamp: new Date().getTime() - Math.floor((Math.random() * 50) + 10)
          }
        ]
      },
      timestamp: new Date().getTime()
    },
    {
      index: 2,
      previous_hash: 'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad',
      hash: 'ba7816bf8f01cfea414140de5daeaa45b00361a396177a9cb410ff61f20015bg',
      data: {
        'proof-of-work': 7,
        transactions: [
          {
            from: '00ebad5f73665c99422bd4fd160675090fcfa845b59aa04cb13de8c03c8da988',
            to: 'bdb06829509f15c8addc645b71fd52cd64a0880439fc974fe3a06e9a0cab3058',
            amount: Math.random() * 100,
            fee: Math.random(),
            timestamp: new Date().getTime() - Math.floor((Math.random() * 50) + 10)
          },
          {
            from: '5866958e7d80fbbd54c2caf07cac0ddea3a9fb91033854180f9562da09bc0644',
            to: '9d24ce083d9fb14aac498fd70785c5060ad5f0eda3b58c3b61b298469050fa6c',
            amount: Math.random() * 100,
            fee: Math.random(),
            timestamp: new Date().getTime() - Math.floor((Math.random() * 50) + 10)
          }
        ]
      },
      timestamp: new Date().getTime()
    },
  ];

  return { blockchain: blockchain };
}());
