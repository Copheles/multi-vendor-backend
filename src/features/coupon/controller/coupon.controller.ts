import { Request, Response } from 'express';
import { HTTP_STATUS } from '~/globals/constants/http';
import { couponService } from '~/services/db/coupon.service';

class CouponController {
  public async create(req: Request, res: Response) {
    const coupon = await couponService.add(req.body);

    return res.status(HTTP_STATUS.CREATED).json({
      message: 'Create a coupon',
      data: coupon
    });
  }

  public async read(req: Request, res: Response) {
    const coupons = await couponService.getAll();

    return res.status(HTTP_STATUS.OK).json({
      message: 'Get all coupons',
      data: coupons
    });
  }

  public async readOne(req: Request, res: Response) {
    const coupon = await couponService.getOne(req.params.code);

    return res.status(HTTP_STATUS.OK).json({
      message: 'Get a coupon',
      data: coupon
    });
  }

  public async edit(req: Request, res: Response) {
    await couponService.edit(req.params.code, req.body);

    return res.status(HTTP_STATUS.OK).json({
      message: 'Update a coupon'
    });
  }

  public async delete(req: Request, res: Response) {
    await couponService.remove(req.params.code);

    return res.status(HTTP_STATUS.OK).json({
      message: 'Delete a coupon'
    });
  }
}

export const couponController: CouponController = new CouponController();
