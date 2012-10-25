//
//  customStereo.m
//  AOC2_Wk1
//
//  Created by Brandon Sease on 9/26/12.
//  Copyright (c) 2012 Brandon Sease. All rights reserved.
//

#import "customStereo.h"

@implementation customStereo

@synthesize headUnit, amplifiers, tweeters, midRange, subWoofers, totalComponents, timePerComp;

//customizing init to set unique data members
-(id)init
{
    self = [super init];
    if (self != nil)
    {
        [self setCostPerHour:500];
        [self setHeadUnit:YES];
        [self setAmplifiers:0];
        [self setTweeters:0];
        [self setMidRange:0];
        [self setSubWoofers:0];
        [self setTotalComponents:0];
        [self setTimePerComp:.5f];
        
    }
    return self;
};

//Overriding the base calculation to factor in unique data members
-(void)calculateCostPerJob
{
    [self setTotalComponents:(amplifiers + tweeters + midRange + subWoofers)];
    if (headUnit == YES)
    {
        [self setHoursPerJob:((totalComponents + 1)  * timePerComp)];
    } else
    {
        [self setHoursPerJob:(totalComponents * timePerComp)];
    }
    [self setTotal:(self.hoursPerJob * self.costPerHour)];
}



@end
