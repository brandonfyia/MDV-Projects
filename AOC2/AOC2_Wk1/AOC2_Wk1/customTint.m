//
//  customTint.m
//  AOC2_Wk1
//
//  Created by Brandon Sease on 9/26/12.
//  Copyright (c) 2012 Brandon Sease. All rights reserved.
//

#import "customTint.h"

@implementation customTint

@synthesize windows, timePerWindow;

//customizing init to set unique data members
-(id)init
{
    self = [super init];
    if (self != nil)
    {
        [self setCostPerHour:100];
        [self setWindows:0];
        [self setTimePerWindow:.5f];
    }
    return self;
};

//Overriding the base calculation to factor in unique data members
-(void)calculateCostPerJob
{
    [self setHoursPerJob:(windows * timePerWindow)];
    [self setTotal:(self.hoursPerJob * self.costPerHour)];
}

@end
