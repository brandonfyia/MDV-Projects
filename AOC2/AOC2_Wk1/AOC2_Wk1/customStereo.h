//
//  customStereo.h
//  AOC2_Wk1
//
//  Created by Brandon Sease on 9/26/12.
//  Copyright (c) 2012 Brandon Sease. All rights reserved.
//

#import "baseCustomCar.h"

@interface customStereo : baseCustomCar

//Data members for number of windows and time per window
@property BOOL headUnit;
@property int amplifiers;
@property int tweeters;
@property int midRange;
@property int subWoofers;
@property int totalComponents;
@property float timePerComp;



@end
