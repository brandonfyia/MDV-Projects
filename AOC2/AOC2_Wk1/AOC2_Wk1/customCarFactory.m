//
//  customCarFactory.m
//  AOC2_Wk1
//
//  Created by Brandon Sease on 9/26/12.
//  Copyright (c) 2012 Brandon Sease. All rights reserved.
//

#import "customCarFactory.h"

@implementation customCarFactory

+(baseCustomCar *)createNewCustomCar:(int)customType
{
    //If tint is requested make tint
    if (customType == TINT)
    {
        return [[customTint alloc] init];
    }
    //If rim is requested make rim
    else if (customType == RIMS)
    {
        return [[customRims alloc] init];
    }
    //If stereo is requested make stereo
    else if (customType == STEREO)
    {
        return [[customStereo alloc] init];
    }
    else return nil;
}
@end
