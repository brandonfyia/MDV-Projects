//
//  customCarFactory.h
//  AOC2_Wk1
//
//  Created by Brandon Sease on 9/26/12.
//  Copyright (c) 2012 Brandon Sease. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "baseCustomCar.h"
#import "customTint.h"
#import "customRims.h"
#import "customStereo.h"


@interface customCarFactory : NSObject

+(baseCustomCar *)createNewCustomCar: (int)customType;







@end
