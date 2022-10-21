import { ApiProperty } from '@nestjs/swagger';

export abstract class PaginatedResultsDto<T> {
  rows: T[];

  @ApiProperty()
  page: number;

  @ApiProperty()
  pageSize: number;

  @ApiProperty()
  count: number;

  @ApiProperty()
  pageCount?: number;

  @ApiProperty()
  pageNumberIsGood?: boolean;

  @ApiProperty()
  hasPreviousPage?: boolean;

  @ApiProperty()
  hasNextPage?: boolean;

  @ApiProperty()
  isFirstPage?: boolean;

  @ApiProperty()
  isLastPage?: boolean;

  @ApiProperty()
  numberOfFirstItemOnPage?: number;

  @ApiProperty()
  firstItemOnPage?: number;

  @ApiProperty()
  numberOfLastItemOnPage?: number;

  @ApiProperty()
  lastItemOnPage?: number;

  constructor(data: T[], count: number, page: number, pageSize: number) {
    this.rows = data;
    this.count = count;
    this.page = page;
    this.pageSize = pageSize;

    this.pageCount =
      this.count > 0
        ? Math.ceil(parseFloat(`${this.count}`) / parseFloat(`${pageSize}`))
        : 0;
    this.pageNumberIsGood =
      this.pageCount > 0 && page <= this.pageCount && page >= 0;
    this.hasPreviousPage = this.pageNumberIsGood && page > 0;
    this.hasNextPage = this.pageNumberIsGood && page + 1 < this.pageCount;
    this.isFirstPage = this.pageNumberIsGood && page === 0;
    this.isLastPage = this.pageNumberIsGood && page + 1 === this.pageCount;
    this.numberOfFirstItemOnPage = this.pageNumberIsGood ? page * pageSize : 0;
    this.firstItemOnPage = this.pageNumberIsGood
      ? this.numberOfFirstItemOnPage
      : 0;
    this.numberOfLastItemOnPage = this.pageNumberIsGood
      ? this.numberOfFirstItemOnPage + this.rows.length - 1
      : 0;
    this.lastItemOnPage = this.pageNumberIsGood ? this.count - 1 : 0;
  }
}
