import { Test, TestingModule } from '@nestjs/testing';
import { classToPlain } from 'class-transformer';
import { UserService } from '../../src/user/user.service';
import { generateCreateUserDto } from './faker';
import { generateUpdateUserDto } from './faker/update-user-dto.faker';

describe('UserRoleService', () => {
  let userService: UserService;
  const mockUserService = {
    find: jest.fn(),
    findById: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const subjects: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: UserService,
          useValue: mockUserService,
        },
      ],
    }).compile();

    userService = subjects.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });

  describe('find', () => {
    test('should return a list', async () => {
      jest
        .spyOn(mockUserService, 'find')
        .mockResolvedValueOnce([{ subjects: 1 }, { subjects: 2 }]);
      await expect(userService.find()).resolves.toHaveLength(2);
    });
  });

  describe('findById', () => {
    test('should return a subjects by id', async () => {
      const subjects = { subjects: 1 };
      const mockFindOne = jest
        .spyOn(mockUserService, 'findById')
        .mockResolvedValueOnce(subjects);
      const result = await userService.findById('someId');

      expect(mockFindOne).toHaveBeenCalledWith('someId');
      expect(result).toStrictEqual(subjects);
    });
  });

  describe('create', () => {
    test('should call create', async () => {
      const data = generateCreateUserDto();
      const mockCreate = jest
        .spyOn(mockUserService, 'create')
        .mockResolvedValueOnce({ id: 1 });

      await userService.create(data);

      expect(mockCreate).toBeCalledTimes(1);
      expect(mockCreate).toHaveBeenCalledWith(data);
    });
  });

  describe('update', () => {
    test('', async () => {
      const data = generateUpdateUserDto();
      const mockUpdate = jest
        .spyOn(mockUserService, 'update')
        .mockResolvedValueOnce({ id: 1 });

      await userService.update('id', data);
      expect(mockUpdate).toBeCalledTimes(1);
      expect(mockUpdate).toHaveBeenCalledWith('id', classToPlain(data));
    });
  });

  describe('remove', () => {
    test('', async () => {
      const mockRemoce = jest
        .spyOn(mockUserService, 'remove')
        .mockResolvedValueOnce({ id: 1 });

      await userService.remove('id');
      expect(mockRemoce).toBeCalledTimes(1);
      expect(mockRemoce).toHaveBeenCalledWith('id');
    });
  });
});
