import { Body, Controller, Post } from '@nestjs/common';
import { CreateWalletDto } from './dto/wallet.dto';
import { WalletsService } from './wallets.service';

@Controller('wallets')
export class WalletsController {
  constructor(private readonly walletsService: WalletsService) {}

  @Post('request-airdrop')
  requestAirdrop(@Body() data: CreateWalletDto) {
    return this.walletsService.requestAirdrop(data.publicAddress);
  }
}
