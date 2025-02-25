import { Request, Response } from 'express';
import { HTTP_STATUS } from '~/globals/constants/http';
import { dashboardService } from '~/services/db/dashboard.service';

class DashboardController {
  public async read(req: Request, res: Response) {
    const productCount = await dashboardService.getInfo();

    return res.status(HTTP_STATUS.OK).json({
      message: 'Shop Information'
    });
  }
}

export const dashboardController: DashboardController = new DashboardController();
