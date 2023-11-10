import React from "react";
import {
  Category,
  Component,
  Variant,
  Palette,
} from "@amplicode/ide-toolbox";
import {
  FormattedDate,
  FormattedDateParts,
  FormattedDateTimeRange,
  FormattedDisplayName,
  FormattedList,
  FormattedListParts,
  FormattedMessage,
  FormattedNumber,
  FormattedNumberParts,
  FormattedPlural,
  FormattedRelativeTime,
  FormattedTime,
  FormattedTimeParts,
  useIntl,
} from "react-intl";

export default () => (
  <Palette embeddable>
    <Category name="Messages">
      <Component
        name="FormattedMessage"
        docURL="https://formatjs.io/docs/react-intl/components#formattedmessage"
      >
        <Variant>
          <FormattedMessage id="messageId" />
        </Variant>
        <Variant name="with default value">
          <FormattedMessage
            id="nonexistentMessageId"
            defaultMessage="Default message"
            values={{ name: "World" }}
          />
        </Variant>
        <Variant name="with variable">
          <FormattedMessage
            id="nonexistentMessageId"
            defaultMessage="varName = {varName}, in default message"
            values={{ varName: "varValue" }}
          />
        </Variant>
      </Component>
      <Component
        name="FormattedPlural"
        docURL="https://formatjs.io/docs/react-intl/components#formattedplural"
      >
        <Variant>
          <FormattedPlural value={10} one="message" other="messages" />
        </Variant>
      </Component>
      <Component
        name="FormattedList"
        docURL="https://formatjs.io/docs/react-intl/components#formattedlist"
      >
        <Variant>
          <FormattedList type="conjunction" value={["one", "two", "three"]} />
        </Variant>
      </Component>
      <Component
        name="FormattedListParts"
        docURL="https://formatjs.io/docs/react-intl/components#formattedlistparts"
      >
        <Variant>
          <FormattedListParts
            type="conjunction"
            value={["one", "two", "three"]}
          >
            {(parts) => {
              return (
                <>
                  {parts.map((part) => {
                    return part.value;
                  })}
                </>
              );
            }}
          </FormattedListParts>
        </Variant>
      </Component>
      <Component
        name="FormattedDisplayName"
        docURL="https://formatjs.io/docs/react-intl/components#formatteddisplayname"
      >
        <Variant name="Language">
          <FormattedDisplayName type="language" value="zh-Hans-SG" />
        </Variant>
        <Variant name="Currency">
          <FormattedDisplayName type="currency" value="JPY" />
        </Variant>
      </Component>
      <Component
        name="FormattedNumber"
        docURL="https://formatjs.io/docs/react-intl/components#formattednumber"
      >
        <Variant>
          <FormattedNumber value={0} />
        </Variant>
        <Variant name="Money">
          <FormattedNumber value={0} style="currency" currency="USD" />
        </Variant>
        <Variant name="Integer">
          <FormattedNumber value={0} maximumFractionDigits={0} />
        </Variant>
      </Component>
      <Component
        name="FormattedNumberParts"
        docURL="https://formatjs.io/docs/react-intl/components#formattednumberparts"
      >
        <Variant>
          <FormattedNumberParts value={0}>
            {(parts) => {
              return (
                <>
                  {parts.map((part) => {
                    return part.value;
                  })}
                </>
              );
            }}
          </FormattedNumberParts>
        </Variant>
      </Component>
      <Component
        name="FormattedDate"
        docURL="https://formatjs.io/docs/react-intl/components#formatteddate"
      >
        <Variant>
          <FormattedDate
            value={new Date()}
            year="numeric"
            month="long"
            day="2-digit"
          />
        </Variant>
      </Component>
      <Component
        name="FormattedDateParts"
        docURL="https://formatjs.io/docs/react-intl/components#formatteddateparts"
      >
        <Variant>
          <FormattedDateParts
            value={new Date()}
            year="numeric"
            month="long"
            day="2-digit"
          >
            {(parts) => {
              return (
                <>
                  {parts.map((part) => {
                    return part.value;
                  })}
                </>
              );
            }}
          </FormattedDateParts>
        </Variant>
      </Component>
      <Component
        name="FormattedTime"
        docURL="https://formatjs.io/docs/react-intl/components#formattedtime"
      >
        <Variant>
          <FormattedTime
            value={new Date()}
            hour="numeric"
            minute="numeric"
            hour12={false}
          />
        </Variant>
      </Component>
      <Component
        name="FormattedTimeParts"
        docURL="https://formatjs.io/docs/react-intl/components#formattedtimeparts"
      >
        <Variant>
          <FormattedTimeParts
            value={new Date()}
            hour="numeric"
            minute="numeric"
            hour12={false}
          >
            {(parts) => {
              return (
                <>
                  {parts.map((part) => {
                    return part.value;
                  })}
                </>
              );
            }}
          </FormattedTimeParts>
        </Variant>
      </Component>
      <Component
        name="FormattedDateTimeRange"
        docURL="https://formatjs.io/docs/react-intl/components#formatteddatetimerange"
      >
        <Variant>
          <FormattedDateTimeRange
            from={new Date("2020-1-1")}
            to={new Date("2020-1-15")}
          />
        </Variant>
      </Component>
      <Component
        name="FormattedRelativeTime"
        docURL="https://formatjs.io/docs/react-intl/components#formattedrelativetime"
      >
        <Variant>
          <FormattedRelativeTime
            value={0}
            numeric="auto"
            updateIntervalInSeconds={1}
          />
        </Variant>
      </Component>
      <Component
        name="useIntl"
        docURL="https://formatjs.io/docs/react-intl/api#useintl-hook"
      >
        <Variant proto={UseIntlProto} />
        <Variant name="format number" proto={UseIntlFormatNumberProto} />
        <Variant name="format date" proto={UseIntlFormatDateProto} />
        <Variant name="format time" proto={UseIntlFormatTimeProto} />
        <Variant name="format list" proto={UseIntlFormatListProto} />
      </Component>
    </Category>
  </Palette>
);

function UseIntlProto() {
  const intl = useIntl();
}

function UseIntlFormatNumberProto() {
  const intl = useIntl();
  const formattedNumber = intl.formatNumber(20.123, {
    style: "decimal",
    maximumFractionDigits: 2,
  });
}

function UseIntlFormatDateProto() {
  const intl = useIntl();
  const formattedDate = intl.formatDate(Date.now(), {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
}

function UseIntlFormatTimeProto() {
  const intl = useIntl();
  const formattedTime = intl.formatTime(Date.now());
}

function UseIntlFormatListProto() {
  const intl = useIntl();
  const formattedList = intl.formatList(["Me", "myself", "I"], {
    type: "conjunction",
  });
}
