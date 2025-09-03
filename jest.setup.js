import { jest } from '@jest/globals';

jest.mock('@react-native-firebase/firestore', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    collection: jest.fn(() => ({
      doc: jest.fn(() => ({
        get: jest.fn(() => Promise.resolve({ exists: true, data: () => ({}) })),
      })),
    })),
  })),
}));

jest.mock('@react-native-firebase/app', () => ({
    __esModule: true,
    default: {
      apps: [],
      initializeApp: jest.fn(() => Promise.resolve({})),
    },
  }));

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter', () => {
    const { EventEmitter } = require('events');
    return class NativeEventEmitter extends EventEmitter {
      constructor() {
        super();
      }
    };
  });

jest.mock('react-native/Libraries/Utilities/BackHandler', () => {
    return {
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      exitApp: jest.fn(),
    };
  });

jest.mock('react-native-reanimated', () => {
    const Reanimated = require('react-native-reanimated/mock');
  
    // The mock for `call` immediately calls the callback which is incorrect
    // So we override it with a no-op
    Reanimated.default.call = () => {};
  
    return Reanimated;
  });

jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');

jest.mock('react-native-splash-screen', () => ({
    hide: jest.fn(),
    show: jest.fn(),
  }));
